import React, { useState, useEffect } from 'react'
import styles from './aulaDia.module.css'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card, CardContent } from '@material-ui/core';
import { message } from 'antd';
import api from '../../../service/api'
import moment from 'moment'
import { FaChevronLeft } from 'react-icons/fa';



const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.white,
        },
    },
}))(TableRow);




const AulaDia = ({ start, end, setView }) => {
    var iframe
    const [state, setState] = useState({
        list: [
            {
                id: 0,
                nome: 'João',
            },
        ],
        presença: false,
        presença2: false,

    })
    function deleteCampeonatoList(id) {
        // api.delete('api/Campeonato/' + id, {
        // })
        //     .then((response) => {
        //         message.success('Sucesso ao deletar Modalidade')
        //         refreshList()
        //     })
        //     .catch((error) => {
        //         message.warning('Erro ao deletar Modalidade')
        //     })

    }
    function refreshList() {
        // api.get('api/Campeonato', {
        // })
        //     .then((response) => {
        //         setState({ ...state, list: response.data })
        //     })

    }
    useEffect(() => {
        refreshList()
    }, [])
    return (
        <div className={styles.Container}>
            <div>
                <div className={styles.ContainerCartoes} >
                    <div className={styles.titulo}>
                        <strong>{moment(start).format('LLLL')}</strong>
                        <div>
                            <FaChevronLeft onClick={() => setView(false)} style={{ cursor: 'pointer', color: 'grey', fontSize: '19px' }} />
                        </div>
                    </div>
                    <Card className={styles.Cartao}>
                        <CardContent>
                            <div className={styles.ConteudoCartoes}>
                                <TableContainer>
                                    <Table aria-label="customized table">
                                        <TableHead style={{ color: "#f5f5f5" }}>
                                            <TableRow>
                                                <StyledTableCell align="center"></StyledTableCell>
                                                <StyledTableCell align="center">Alunos</StyledTableCell>
                                                <StyledTableCell align="center">Opções</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {state.list.map((list, index) => (
                                                <StyledTableRow key={index}>
                                                    <StyledTableCell align="center" component="th" scope="row">
                                                        {index + 1}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">{list.nome}</StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                            {!state.presença ? <><Button variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} onClick={() => setState({ ...state, presença: true })} className={styles.botaoCarregar} color="primary">
                                                                Presente
                                                            </Button> <Button variant="contained"
                                                                    className={styles.botaoCarregar}
                                                                    style={{ textTransform: 'capitalize', backgroundColor: '#9E9E9E', color: '#fff' }}>
                                                                    Ausente
                                                        </Button></> : <div>Presente</div>}
                                                        </div>
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default AulaDia

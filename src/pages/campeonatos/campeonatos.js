import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import styles from './campeonatos.module.css'
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
import api from '../../service/api'
import moment from 'moment'



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




const Campeonatos = (props) => {
    var iframe
    const [state, setState] = useState({
        list: []
    })
    function deleteCampeonatoList(id) {
        if (window.confirm('Você deseja realmente deletar esse Campeonato ?')) {
            api.delete('api/Campeonato/' + id, {
            })
                .then((response) => {
                    message.success('Sucesso ao deletar Campeonato')
                    refreshList()
                })
                .catch((error) => {
                    message.warning('Erro ao deletar Campeonato')
                })
        }
    }
    function refreshList() {
        api.get('api/Campeonato', {
        })
            .then((response) => {
                setState({ ...state, list: response.data })
            })

    }
    useEffect(() => {
        refreshList()
    }, [])
    return (
        <div className={styles.Container}>
            <div>
                <div className={styles.ContainerCartoes} >
                    <Card className={styles.Cartao}>
                        <div className={styles.title}>
                            <div className={styles.nameTitleCartao}>
                                Lista de Campeonatos Cadastrados
                            </div>
                            <Link to="/CadastroCampeonato" style={{ color: 'white', textDecoration: 'inherit' }}>
                                <Button variant="contained"
                                    style={{
                                        margin: '10px 15px 0 0',
                                        textTransform: 'capitalize',
                                        backgroundColor: '#fc9643'
                                    }}
                                    className={styles.botaoNovo}
                                    color="primary">
                                    + Novo
                                </Button>
                            </Link>
                        </div>
                        <CardContent>
                            <div className={styles.ConteudoCartoes}>
                                <TableContainer>
                                    <Table aria-label="customized table">
                                        <TableHead style={{ color: "#f5f5f5" }}>
                                            <TableRow>
                                                <StyledTableCell align="center"></StyledTableCell>
                                                <StyledTableCell align="center">Nome do Campeonato</StyledTableCell>
                                                <StyledTableCell align="center">Data</StyledTableCell>
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
                                                    <StyledTableCell align="center">{moment(list.data).format('LLLL')}</StyledTableCell>
                                                    <StyledTableCell align="center">{`${list.atletas.length} Atletas`}</StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                            <Link to={{ pathname: `/CadastroCampeonato/${index}`, state: list }} style={{ color: 'white', textDecoration: 'inherit', width: '30%' }}>
                                                                <Button variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.botaoCarregar} color="primary">
                                                                    Carregar
                                                            </Button>
                                                            </Link>
                                                            <Button variant="contained"
                                                                onClick={() => deleteCampeonatoList(list.id)}
                                                                className={styles.botaoCarregar}
                                                                style={{ textTransform: 'capitalize', backgroundColor: '#9E9E9E', color: '#fff' }}>
                                                                Deletar
                                                        </Button>
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
export default Campeonatos

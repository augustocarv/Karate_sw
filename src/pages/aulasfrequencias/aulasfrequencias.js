import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
import styles from './aulasfrequencias.module.css'
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
import moment from 'moment'
import api from '../../service/api'


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




const AulasFrequencias = (props) => {
    const [state, setState] = useState({
        list: []
    })
    function deleteAulaList(id) {
        if (window.confirm('Você deseja realmente deletar esse Aula ?')) {
            api.delete('api/aula/' + id, {
            })
                .then((response) => {
                    message.success('Sucesso ao deletar Aula')
                    refreshList()
                })
                .catch((error) => {
                    message.warning('Erro ao deletar Aula')
                })
        }
    }
    function refreshList() {
        api.get('api/aula', {
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
                                Lista de Aulas Cadastradas
                            </div>
                            <Link to="/CadastroAula" style={{ color: 'white', textDecoration: 'inherit' }}>
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
                                                <StyledTableCell align="center">Aula</StyledTableCell>
                                                <StyledTableCell align="center">Dia da Semana</StyledTableCell>
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
                                                    <StyledTableCell align="center">{moment(list.dataInicial).format('dddd')}</StyledTableCell>
                                                    <StyledTableCell align="center">{list.atletas.length}</StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                            <Link to={{ pathname: `/CadastroAula/${index}`, state: list }} style={{ color: 'white', textDecoration: 'inherit', width: '30%' }}>
                                                                <Button variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#fc9643', width: '100%' }} className={styles.botaoCarregar} color="primary">
                                                                    Carregar
                                                                </Button>
                                                            </Link>
                                                            <Button variant="contained"
                                                                onClick={() => deleteAulaList(list.id)}
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
export default AulasFrequencias

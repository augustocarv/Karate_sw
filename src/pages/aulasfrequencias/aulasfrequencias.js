import React, { useState } from 'react';
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
    const [list, setList] = useState([
        {
            aula: 'Karate',
            diasSemana: 'Quarta-Feira',
            professores: '2 Professores',
            alunos: '2 Alunos'
        }
    ])
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
                                                <StyledTableCell align="center">Dias da Semana</StyledTableCell>
                                                <StyledTableCell align="center">Professores</StyledTableCell>
                                                <StyledTableCell align="center">Alunos</StyledTableCell>
                                                <StyledTableCell align="center">Opções</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {list.map((list, index) => (
                                                <StyledTableRow key={index}>
                                                    <StyledTableCell align="center" component="th" scope="row">
                                                        {index + 1}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">{list.aula}</StyledTableCell>
                                                    <StyledTableCell align="center">{list.diasSemana}</StyledTableCell>
                                                    <StyledTableCell align="center">{list.professores}</StyledTableCell>
                                                    <StyledTableCell align="center">{list.alunos}</StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <div style={{display:'flex', justifyContent:'space-evenly'}}>
                                                            <Button variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.botaoCarregar} color="primary">
                                                                Carregar
                                                        </Button>
                                                            <Button variant="contained"
                                                                className={styles.botaoCarregar}
                                                                style={{ textTransform: 'capitalize', backgroundColor: '#9E9E9E', color: '#fff' }}>
                                                                Desvincular
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

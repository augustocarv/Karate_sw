import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import styles from './prestacoes.module.css'
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




const Prestacoes = (props) => {
    const [list, setList] = useState([
        {
            descricao: 'Kimono',
            data: '15/10/1998',
            valor: '150',
            status: 'Entrada',
            cadastrado: 'Luiz Augusto Barros de Carvalho'
        }
    ])
    return (
        <div className={styles.Container}>
            <div>
                <div className={styles.ContainerCartoes} >
                    <Card className={styles.Cartao}>
                        <div className={styles.title}>
                            <div className={styles.nameTitleCartao}>
                                Prestação de Contas
                            </div>
                            <Link to="/CadastroPrestacao" style={{ color: 'white', textDecoration: 'inherit' }}>
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
                                                <StyledTableCell align="center">Descrição</StyledTableCell>
                                                <StyledTableCell align="center">Data</StyledTableCell>
                                                <StyledTableCell align="center">Valor</StyledTableCell>
                                                <StyledTableCell align="center">Status</StyledTableCell>
                                                <StyledTableCell align="center">Cadastrado por:</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {list.map((list, index) => (
                                                <StyledTableRow key={list.id}>
                                                    <StyledTableCell align="center" component="th" scope="row">
                                                        {index + 1}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">{list.descricao}</StyledTableCell>
                                                    <StyledTableCell align="center">{list.data}</StyledTableCell>
                                                    <StyledTableCell align="center">{list.valor}</StyledTableCell>
                                                    <StyledTableCell align="center">{list.status}</StyledTableCell>
                                                    <StyledTableCell align="center">{list.cadastrado}</StyledTableCell>
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
export default Prestacoes

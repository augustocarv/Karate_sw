import React, { useState, useEffect } from 'react';
import styles from './modalidades.module.css'
import { Radio } from 'semantic-ui-react';
import Button from '@material-ui/core/Button'
import { Upload, message } from 'antd';
import moment from 'moment'
import { Input, Label, Col, Row } from 'reactstrap';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { withRouter, Link } from 'react-router-dom'
import MaskedInput from 'react-text-mask'
import api from '../../../service/api'


const CadastroModalidades = (props) => {
    const [state, setState] = useState(
        {
            nome: '',
            editItem: false,
        }
    )
    useEffect(() => {
        if (props.location.state) {
            setState({
                nome: props.location.state.nome,
                editItem: true
            })
        }
    }, [])


    function handleSave() {
        api.post('api/modalidade', {
            "nome": state.nome,
        })
            .then((response) => {
                message.success('Sucesso ao gravar Modalidade')
                props.history.push({
                    pathname: '/Modalidades'
                })

            })
            .catch((error) => {
                error.response.data.map((item) => {
                    message.error(item.Message)
                })
            })
    }
    function handleEdit() {
        if (props.location.state) {
            api.put('api/modalidade', {
                "id": props.location.state.id,
                "nome": state.nome,

            })
                .then((response) => {
                    message.success('Sucesso ao editar Modalidade')
                    props.history.push({
                        pathname: '/Modalidades'
                    })
                })
                .catch((error) => {
                    message.warning('Erro ao editar Modalidade')
                })
        }
    }

    function handleChange(event) {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }


    return (
        <div className={styles.container}>
            <div className={styles.top_form}>
                <div className={styles.title}>
                    Novo Cadastro de Modalidade
                </div>
            </div>
            <div className={styles.content_form}>
                <div className={styles.form}>
                    <Col style={{ marginRight: '0px', marginLeft: '0px', padding: '0' }}>
                        <Row style={{ marginLeft: '30px', marginRight: '0px' }}>
                            <div className={styles.card_inputs} style={{ width: '25%' }}>
                                <label>Nome</label>
                                <Input
                                    className={styles.inputs}
                                    style={{ width: '100%' }}
                                    type="text"
                                    name="nome"
                                    value={state.nome}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                        </Row>
                        <Row style={{ marginLeft: '0px', marginRight: '0px', marginBottom: '15px', display: 'flex', justifyContent: 'flex-end', width: '91.5%' }}>
                            <div style={{ marginLeft: '29%' }}>
                                {state.editItem ?
                                    <Button variant="contained" onClick={() => handleEdit()} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
                                        Editar
                                    </Button>
                                    :
                                    <Button variant="contained" onClick={() => handleSave()} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
                                        Salvar
                                    </Button>
                                }
                                <Link to='/Modalidades'>
                                    <Button variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#959C9C' }} className={styles.btn_salvar} color="primary">
                                        Cancelar
                                    </Button>
                                </Link>
                            </div>
                        </Row>
                    </Col>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CadastroModalidades);
import React, { useState, useEffect } from 'react';
import styles from './aulasfrequencias.module.css'
import { Radio } from 'semantic-ui-react';
import Button from '@material-ui/core/Button'
import { Upload, message } from 'antd';
import { Input, Label, Col, Row } from 'reactstrap';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Select from 'react-select';
import { withRouter } from 'react-router-dom'
import api from '../../../service/api'

const colourOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'strawberry2', label: 'Strawberry' },
    { value: 'strawberry3', label: 'Strawberry' },
    { value: 'strawberry4', label: 'Strawberry' },
    { value: 'strawberry5', label: 'Strawberry' },
    { value: 'strawberry6', label: 'Strawberry' },
    { value: 'strawberry7', label: 'Strawberry' },
    { value: 'strawberry8', label: 'Strawberry' },
    { value: 'strawberry6456', label: 'Strawberry' },
    { value: 'strawberry456', label: 'Strawberry' },
    { value: 'strawberry73', label: 'Strawberry' },
    { value: 'strawberry34', label: 'Strawberry' },
    { value: 'strawberry123', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const initialState = {
    turma: '',
    estilo: '',
    dataInicio: new Date(),
    dataFinal: new Date(),
    endereco: '',
    bairro: '',
    complemento: '',
    cep: '',
    estado: '',
    cidade: '',
    atletasAula: [],
    editItem: false,
}
const CadastroAulasFreq = (props) => {
    const [state, setState] = useState(
        {
            turma: '',
            estilo: '',
            dataInicio: new Date(),
            dataFinal: new Date(),
            endereco: '',
            bairro: '',
            complemento: '',
            cep: '',
            estado: '',
            cidade: '',
            atletasAula: [],
            editItem: false,

        }
    )
    useEffect(() => {
        if (props.location.state) {
            setState({
                turma: props.location.state.nome,
                estilo: props.location.state.modalidadeId,
                dataInicio: new Date(props.location.state.dataInicio),
                dataFinal: new Date(props.location.state.dataFinal),
                endereco: props.location.state.rua,
                bairro: props.location.state.bairro,
                cep: props.location.state.cep,
                estado: props.location.state.estado,
                cidade: props.location.state.cidade,
                atletasAula: props.location.state.atletas,
                editItem: true
            })
        }
    }, [props])

    function handleSave() {
        api.post('api/atletas', {
            nome: state.turma,
            rua: state.endereco,
            bairro: state.bairro,
            cep: state.cep,
            estado: state.estado,
            cidade: state.cidade,
            dataInicial: state.dataInicio,
            dataFinal: state.dataFinal,
            modalidadeId: state.modalidade,
            atletas: state.atletasAula
        })
            .then((response) => {
                message.success('Sucesso ao gravar Aula')
            })
            .catch((error) => {
                message.error('Erro ao gravar Aula')
            })
    }
    function handleEdit() {
        if (props.location.state) {
            api.post('api/atletas', {
                id: props.location.state.id,
                nome: state.turma,
                rua: state.endereco,
                bairro: state.bairro,
                cep: state.cep,
                estado: state.estado,
                cidade: state.cidade,
                dataInicial: state.dataInicio,
                dataFinal: state.dataFinal,
                modalidadeId: state.modalidade,
                atletas: state.atletasAula
            })
                .then((response) => {
                    message.success('Sucesso ao editar Aula')
                })
                .catch((error) => {
                    message.error('Erro ao editar Aula')
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
            <div className={styles.title}>
                Novo Cadastro
            </div>
            <Row style={{ margin: '0px 0px 0px 28px' }}>
                <div className={styles.card_inputs} style={{ width: '30%' }}>
                    <label>Turma</label>
                    <Input
                        className={styles.inputs}
                        style={{ width: '100%' }}
                        type="text"
                        name="turma"
                        value={state.turma}
                        onChange={event => handleChange(event)}
                    />
                </div>
                <div className={styles.card_inputs} style={{ width: '30%' }}>
                    <label>Data Inicio</label>
                    <Input
                        className={styles.inputs}
                        style={{ width: '100%' }}
                        type="datetime-local"
                        step="1800"
                        name="dataInicio"
                        value={state.dataInicio}
                        onChange={event => handleChange(event)}
                    />
                </div>
                <div className={styles.card_inputs} style={{ width: '30%' }}>
                    <label>Data Final</label>
                    <Input
                        className={styles.inputs}
                        style={{ width: '100%' }}
                        type="date"
                        name="dataFinal"
                        value={state.dataFinal}
                        onChange={event => handleChange(event)}
                    />
                </div>
            </Row>
            <hr className={styles.hr} />
            <Row style={{ margin: '0px 0px 0px 28px' }}>
                <div className={styles.card_inputs} style={{ width: '30%' }}>
                    <label>CEP</label>
                    <Input
                        className={styles.inputs}
                        style={{ width: '100%' }}
                        type="text"
                        name="cep"
                        value={state.cep}
                        onChange={event => handleChange(event)}
                    />
                </div>
                <div className={styles.card_inputs} style={{ width: '30%' }}>
                    <label>Cidade</label>
                    <Input
                        className={styles.inputs}
                        style={{ width: '100%' }}
                        type="text"
                        name="cidade"
                        value={state.cidade}
                        onChange={event => handleChange(event)}
                    />
                </div>
                <div className={styles.card_inputs} style={{ width: '30%' }}>
                    <label>Estado</label>
                    <Input
                        className={styles.inputs}
                        style={{ width: '100%' }}
                        type="text"
                        name="estado"
                        value={state.estado}
                        onChange={event => handleChange(event)}
                    />
                </div>
            </Row>
            <hr className={styles.hr} />
            <Row style={{ margin: '0px 0px 0px 28px' }}>
                <div className={styles.card_inputs} style={{ width: '30%' }}>
                    <label>Endereço</label>
                    <Input
                        className={styles.inputs}
                        style={{ width: '100%' }}
                        type="text"
                        name="endereco"
                        value={state.endereco}
                        onChange={event => handleChange(event)}
                    />
                </div>
                <div className={styles.card_inputs} style={{ width: '30%' }}>
                    <label>Bairro</label>
                    <Input
                        className={styles.inputs}
                        style={{ width: '100%' }}
                        type="text"
                        name="bairro"
                        value={state.bairro}
                        onChange={event => handleChange(event)}
                    />
                </div>
                <div className={styles.card_inputs} style={{ width: '30%' }}>
                    <label>Complemento</label>
                    <Input
                        className={styles.inputs}
                        style={{ width: '100%' }}
                        type="text"
                        name="complemento"
                        value={state.complemento}
                        onChange={event => handleChange(event)}
                    />
                </div>
            </Row>
            <hr className={styles.hr} />
            <Row style={{ margin: '0px 0px 0px 28px' }}>
                <div className={styles.card_inputs} style={{ width: '46.1%' }}>
                    <label>Atletas</label>
                    <Select
                        isMulti
                        name="atletasAula"
                        options={colourOptions}
                        value={state.atletasAula}
                        onChange={event => handleChange(event)}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
                <div className={styles.card_inputs} style={{ width: '46.1%' }}>
                    <label>Modalidade</label>
                    <Select
                        name="estilo"
                        options={colourOptions}
                        value={state.estilo}
                        onChange={event => handleChange(event)}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
            </Row>

            <Row style={{ margin: '20px 48px 0px 0px', display: 'flex', justifyContent: 'flex-end' }}>
                {state.editItem ?
                    <Button variant="contained" onClick={() => handleEdit()} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
                        Salvar
                </Button>
                    :
                    <Button variant="contained" onClick={() => handleSave()} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
                        Salvar
                </Button>
                }
                <Button variant="contained" onClick={() => setState({ ...initialState })} style={{ textTransform: 'capitalize', backgroundColor: '#959C9C' }} className={styles.btn_salvar} color="primary">
                    Cancelar
                </Button>
            </Row>
        </div>
    )
}

export default withRouter(CadastroAulasFreq);
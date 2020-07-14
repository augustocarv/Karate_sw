import React, { useState, useEffect } from 'react';
import styles from './aulasfrequencias.module.css'
import { Radio } from 'semantic-ui-react';
import Button from '@material-ui/core/Button'
import { Upload, message } from 'antd';
import { Input, Label, Col, Row } from 'reactstrap';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import MaskedInput from 'react-text-mask'
import Select from 'react-select';
import { withRouter, Link } from 'react-router-dom'
import api from '../../../service/api'
import moment from 'moment'


const initialState = {
    nome: '',
    modalidade: '',
    dataInicio: '',
    dataFinal: '',
    rua: '',
    bairro: '',
    complemento: '',
    cep: '',
    estado: '',
    cidade: '',
    atletas: [],
    editItem: false,
}
const CadastroAulasFreq = (props) => {
    const [state, setState] = useState(
        {
            nome: '',
            modalidades: [],
            modalidade: '',
            dataInicio: '',
            dataFinal: '',
            rua: '',
            bairro: '',
            complemento: '',
            cep: '',
            estado: '',
            cidade: '',
            atletas: [],
            atletasAula: [],
            editItem: false,
            loading: false,

        }
    )




    useEffect(() => {
        refreshList()
    }, [props])

    function handleSave() {
        const arrayAux = []

        state.atletasAula.map((item) => {
            return arrayAux.push({
                atletaId: item.atletaId
            })
        })
        api.post('api/aula', {
            nome: state.nome,
            rua: state.rua,
            bairro: state.bairro,
            cep: state.cep,
            estado: state.estado,
            cidade: state.cidade,
            dataInicial: moment(state.dataInicio).format(),
            dataFinal: moment(state.dataFinal).format(),
            modalidadeId: state.modalidade,
            atletas: arrayAux
        })
            .then((response) => {
                message.success('Sucesso ao gravar Aula')
                props.history.push({
                    pathname: '/AulasFrequencias'
                })
            })
            .catch((error) => {
                message.warning('Erro ao gravar Aula')
            })
    }
    async function refreshList() {
        const arrayAux = []
        const arrayAtletas = []
        const arrayModalidade = []
        await api.get('api/modalidade').then(async (response) => { await response.data.map((item) => { arrayModalidade.push({ value: item.id, label: item.nome }) }) })
        await api.get('api/atleta').then(async (response) => { await response.data.map(async (item) => { arrayAux.push({ value: item.id, label: item.nome }) }) })


        if (props.location.state) {
            const arrayAuxLocation = []
            arrayAux.filter(item1 => {
                props.location.state.atletas.filter(item2 => {
                    if (item1.value === item2.atletaId) {
                        arrayAuxLocation.push({
                            value: item2.atletaId,
                            label: item1.label,
                        })
                    }
                    else {
                        arrayAtletas.push({
                            value: item2.atletaId,
                            label: item1.label,
                        })
                    }
                })
            })

            await setState({
                nome: props.location.state.nome,
                modalidades: arrayModalidade,
                modalidade: props.location.state.modalidadeId,
                dataInicio: props.location.state.dataInicial,
                dataFinal: props.location.state.dataFinal,
                rua: props.location.state.rua,
                bairro: props.location.state.bairro,
                cep: props.location.state.cep,
                estado: props.location.state.estado,
                cidade: props.location.state.cidade,
                atletas: arrayAtletas,
                atletasAula: arrayAuxLocation,
                editItem: true
            })

        } else {
            setState({ ...state, modalidades: arrayModalidade, atletas: arrayAux })
        }

    }
    function handleEdit() {
        const arrayAux = []
        if (props.location.state) {
            state.atletasAula.map((item) => {
                return arrayAux.push({
                    atletaId: item.atletaId
                })
            })
            api.post('api/aula', {
                id: props.location.state.id,
                nome: state.nome,
                rua: state.rua,
                bairro: state.bairro,
                cep: state.cep,
                estado: state.estado,
                cidade: state.cidade,
                dataInicial: moment(state.dataInicio).format(),
                dataFinal: moment(state.dataFinal).format(),
                modalidadeId: state.modalidade,
                atletas: arrayAux
            })
                .then((response) => {
                    message.success('Sucesso ao editar Aula')
                    props.history.push({
                        pathname: '/AulasFrequencias'
                    })
                })
                .catch((error) => {
                    message.warning('Erro ao editar Aula')
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
    function DesMask(e, nome) {
        switch (nome) {
            case 'cep':
                let cep = e.target.value
                cep = cep.replace('-', "")
                setState({ ...state, cep: cep })
                break;
            default:
                break;
        }
    }
    function setAtletas(event, option) {
        if (event !== null) {
            event.map((item) => {
                if (option.action === "select-option") {
                    setState({
                        ...state,
                        atletasAula:
                            [
                                ...state.atletasAula,
                                {
                                    atletaId: item.value,
                                    label: item.label,
                                }
                            ]
                    })
                }
                if (option.action === "remove-value") {
                    const data = state.atletasAula.filter(opt => opt.value !== option.removedValue.value)
                    if (state.atletasAula.length > 1) {
                        setState({
                            ...state,
                            atletasAula:
                                [
                                    ...data
                                ]
                        })
                    }
                }

            })
        }
        if (event === null) {
            const arrayAux = []
            setState({
                ...state,
                atletasAula: arrayAux
            })
        }

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
                        name="nome"
                        value={state.nome}
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
                        type="datetime-local"
                        step="1800"
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
                    <MaskedInput
                        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                        type="text"
                        name='cep'
                        className={`form-control ${styles.inputs}`}
                        keepCharPositions='true'
                        value={state.cep}
                        onChange={e => DesMask(e, 'cep')} />
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
                        name="rua"
                        value={state.rua}
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
                        name="atletas"
                        options={state.atletas}
                        value={state.atletasAula}
                        onChange={(event, options) => setAtletas(event, options)}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
                <div className={styles.card_inputs} style={{ width: '46.1%' }}>
                    <label>Modalidade</label>
                    <Select
                        name="modalidade"
                        options={state.modalidades}
                        value={state.modalidades.filter(option => option.value === state.modalidade)}
                        onChange={event => setState({ ...state, modalidade: event.value })}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
            </Row>

            <Row style={{ margin: '20px 48px 0px 0px', display: 'flex', justifyContent: 'flex-end' }}>
                {state.editItem ?
                    <Button variant="contained" onClick={() => handleEdit()} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
                        Editar
                </Button>
                    :
                    <Button variant="contained" onClick={() => handleSave()} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
                        Salvar
                </Button>
                }
                <Link to='/AulasFrequencias'>
                    <Button variant="contained" onClick={() => setState({ ...initialState })} style={{ textTransform: 'capitalize', backgroundColor: '#959C9C' }} className={styles.btn_salvar} color="primary">
                        Cancelar
                </Button>
                </Link>
            </Row>
        </div>
    )
}

export default withRouter(CadastroAulasFreq);
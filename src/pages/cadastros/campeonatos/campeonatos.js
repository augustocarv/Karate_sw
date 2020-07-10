import React, { useState, useEffect } from 'react';
import styles from './campeonatos.module.css'
import { Radio } from 'semantic-ui-react';
import Button from '@material-ui/core/Button'
import { Upload, message } from 'antd';
import { Input, Label, Col, Row } from 'reactstrap';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Select from 'react-select';
import { withRouter } from 'react-router-dom'
import api from '../../../service/api'
import axios from 'axios'
import moment from 'moment'

const colourOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry2' },
  { value: 'strawberry2', label: 'Strawberry3' },
  { value: 'strawberry3', label: 'Strawberry4' },
  { value: 'strawberry4', label: 'Strawberry5' },
  { value: 'strawberry5', label: 'Strawberry6' },
  { value: 'strawberry6', label: 'Strawberry7' },
  { value: 'strawberry7', label: 'Strawberry8' },
  { value: 'strawberry8', label: 'Strawberry9' },
  { value: 'strawberry6456', label: 'Strawberry11' },
  { value: 'strawberry456', label: 'Strawberry12' },
  { value: 'strawberry73', label: 'Strawberry123' },
  { value: 'strawberry34', label: 'Strawberry12' },
  { value: 'strawberry123', label: 'Strawberry5215' },
  { value: 'vanilla', label: 'Vanilla' }
]

const initialState = {
  nome: '',
  premiacao: '',
  estilo: '',
  data: '',
  modalidade: '',
  arbitros: [],
  atletas: [],
  chave: '8',
  editItem: false,
}
const CadastroCampeonatos = (props) => {
  const [state, setState] = useState(
    {
      nome: '',
      premiacao: '',
      estilo: '',
      data: '',
      modalidade: '',
      arbitros: [],
      atletas: [],
      chave: '8',
      editItem: false,
      viewCampeonato: false,

    }
  )
  useEffect(() => {
    if (props.location.state) {
      setState({
        nome: props.location.state.nome,
        premiacao: props.location.state.premiacao,
        data: new Date(props.location.state.data),
        modalidade: props.location.state.modalidade,
        arbitros: props.location.state.arbitros,
        atletas: props.location.state.atletas,
        chave: props.location.state.chave,
        editItem: true
      })
    }
    console.log(state)
  }, [props, state])

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
  function handleSaveChallonge() {
    axios.post(`https://api.challonge.com/v1/tournaments.json`, {
      api_key: 'vcOcbI7p8Gut1raQapl3uiCdEttjIkrRKTVdRScV',
      tournament: {
        name: state.nome,
        tournament_type: 'Single elimination',
        url: `SmartDojo_${state.nome}`,
        signup_cap: state.chave,
        hold_third_place_match: false,
        private: true,
        notify_users_when_matches_open: false,
        notify_users_when_the_tournament_ends: false,
        start_at: moment(new Date()).format(),

      }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
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

  function setArbitros(event, option) {
    if (event !== null) {
      event.map((item) => {
        if (option.action === "select-option") {
          setState({
            ...state,
            arbitros:
              [
                ...state.arbitros,
                {
                  value: item.value,
                  label: item.label
                }
              ]
          })
        }
        else if (option.action === "remove-value" || option.action === "pop-value") {
          const data = state.arbitros.filter(opt => opt.label !== option.removedValue.label)
          setState({
            ...state,
            arbitros:
              [
                ...data
              ]
          })
        }

      })
    }

  }
  function setAlunos(event, option) {
    if (event !== null) {
      event.map((item) => {
        if (option.action === "select-option") {
          setState({
            ...state,
            atletas:
              [
                ...state.atletas,
                {
                  value: item.value,
                  label: item.label
                }
              ]
          })
        }
        else if (option.action === "remove-value" || option.action === "pop-value") {
          const data = state.atletas.filter(opt => opt.label !== option.removedValue.label)
          setState({
            ...state,
            atletas:
              [
                ...data
              ]
          })
        }

      })
    }

  }
  const Cadastro = () => {
    return (
      <>
        <div className={styles.title}>
          Novo Cadastro
          </div>
        <Row style={{ margin: '0px 0px 0px 28px' }}>
          <div className={styles.card_inputs} style={{ width: '46.1%' }}>
            <label>Árbitros</label>
            <Select
              isMulti
              name="atletasAula"
              options={colourOptions}
              onChange={(event, options) => setArbitros(event, options)}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <div className={styles.card_inputs} style={{ width: '46.1%' }}>
            <label>Atletas</label>
            <Select
              isMulti
              name="atletas"
              options={colourOptions}
              onChange={(event, options) => setAlunos(event, options)}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </Row>
        <hr className={styles.hr} />
        <Row style={{ margin: '0px 0px 0px 28px' }}>
          <div className={styles.card_inputs} style={{ width: '30%' }}>
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
          <div className={styles.card_inputs} style={{ width: '30%' }}>
            <label>Premiação</label>
            <Input
              className={styles.inputs}
              style={{ width: '100%' }}
              type="text"
              name="premiacao"
              value={state.premiacao}
              onChange={event => handleChange(event)}
            />
          </div>
          <div className={styles.card_inputs} style={{ width: '30%' }}>
            <label>Estilo</label>
            <Input
              className={styles.inputs}
              style={{ width: '100%' }}
              type="text"
              name="estilo"
              value={state.estilo}
              onChange={event => handleChange(event)}
            />
          </div>
        </Row>
        <hr className={styles.hr} />
        <Row style={{ margin: '0px 0px 0px 28px' }}>
          <div className={styles.card_inputs} style={{ width: '30%' }}>
            <label>Modalidade</label>
            <Input
              className={styles.inputs}
              style={{ width: '100%' }}
              type="text"
              name="modalidade"
              value={state.modalidade}
              onChange={event => handleChange(event)}
            />
          </div>
          <div className={styles.card_inputs} style={{ width: '30%' }}>
            <label>Data</label>
            <Input
              className={styles.inputs}
              style={{ width: '100%' }}
              type="date"
              name="data"
              value={state.data}
              onChange={event => handleChange(event)}
            />
          </div>
          <div className={styles.card_inputs} style={{ width: '30%' }}>
            <label>Chave</label>
            <Input type="select" name="chave" className={styles.inputs} value={state.chave} onChange={event => handleChange(event)}>
              <option>Selecione</option>
              <option value='8'>8</option>
              <option value='16'>16</option>
            </Input>
          </div>
        </Row>
        <hr className={styles.hr} />
        <Row style={{ margin: '20px 48px 0px 0px', display: 'flex', justifyContent: 'flex-end' }}>
          {state.editItem ?
            <Button variant="contained" onClick={() => handleEdit()} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
              Salvar
              </Button>
            :
            <Button variant="contained" onClick={() => [handleSaveChallonge()]} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
              Salvar
            </Button>
          }
          <Button variant="contained" onClick={() => setState({ ...initialState })} style={{ textTransform: 'capitalize', backgroundColor: '#959C9C' }} className={styles.btn_salvar} color="primary">
            Cancelar
              </Button>
        </Row>
      </>
    )
  }
  const PreviewBracket = () => {
    return (
      <Row style={{ margin: '0px 0px 0px 28px' }}>
      </Row>
    )
  }


  return (
    <div className={styles.container}>
      {state.viewCampeonato ? PreviewBracket() : Cadastro()}
    </div>
  )
}

export default withRouter(CadastroCampeonatos);
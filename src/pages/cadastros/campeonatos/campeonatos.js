import React, { useState, useEffect } from 'react';
import styles from './campeonatos.module.css'
import { Radio } from 'semantic-ui-react';
import Button from '@material-ui/core/Button'
import { Upload, message } from 'antd';
import { Input, Label, Col, Row } from 'reactstrap';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Select from 'react-select';
import { withRouter, Link } from 'react-router-dom'
import api from '../../../service/api'


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
  var iframe
  const [state, setState] = useState(
    {
      nome: '',
      atletasAula: [],
      atletas: [],
      modalidades: [],
      modalidade: '',
      descricao: '',
      data: '',
      iframe: '',
      editItem: false,
      viewCampeonato: false,
      carregouIframe: false,
    }
  )
  useEffect(() => {
    refreshList()
  }, [props])


  async function refreshList() {
    let iframe
    const arrayAux = []
    const arrayAtletas = []
    const arrayModalidade = []
    await api.get('api/modalidade').then(async (response) => { await response.data.map((item) => { arrayModalidade.push({ value: item.id, label: item.nome }) }) })
    await api.get('api/atleta').then(async (response) => { await response.data.map(async (item) => { arrayAux.push({ value: item.id, label: item.nome }) }) })



    if (props.location.state) {
      await api.get('api/Campeonato/embed-code/id=' + props.location.state.id).then((response) => { iframe = response.data })
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
        descricao: props.location.state.descricao,
        data: props.location.state.data,
        atletas: arrayAtletas,
        iframe: iframe,
        atletasAula: arrayAuxLocation,
        editItem: true
      })
    } else {
      setState({ ...state, modalidades: arrayModalidade, atletas: arrayAux })
    }
  }
  function handleSave() {
    api.post('api/Campeonato', {
      nome: state.nome,
      descricao: state.descricao,
      data: state.data,
      modalidadeId: state.modalidade,
      atletas: state.atletasAula,
    })
      .then((response) => {
        message.success('Sucesso ao gravar campeonato')
        props.history.push({
          pathname: '/Campeonatos'
        })
      })
      .catch((error) => {
        message.error('Erro ao gravar campeonato')
      })
  }
  function handleEdit() {
    if (props.location.state) {
      api.put('api/Campeonato', {
        id: props.location.state.id,
        nome: state.nome,
        descricao: state.descricao,
        data: state.data,
        modalidadeId: state.modalidade,
        atletas: state.atletasAula,
      })
        .then((response) => {
          message.success('Sucesso ao editar campeonato')
          props.history.push({
            pathname: '/Campeonatos'
          })
        })
        .catch((error) => {
          message.error('Erro ao editar campeonato')
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
  function changeView(view) {
    setState({ ...state, viewCampeonato: view })
  }
  const Cadastro = () => {
    return (
      <>
        <div className={styles.title}>
          Novo Cadastro
          </div>
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
        <hr className={styles.hr} />
        <Row style={{ margin: '0px 0px 0px 28px' }}>
          <div className={styles.card_inputs} style={{ width: '46.1%' }}>
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
          <div className={styles.card_inputs} style={{ width: '46.1%' }}>
            <label>Data</label>
            <Input
              className={styles.inputs}
              style={{ width: '100%' }}
              type="datetime-local"
              step="1800"
              name="data"
              value={state.data}
              onChange={event => handleChange(event)}
            />
          </div>
        </Row>
        <hr className={styles.hr} />
        <Row style={{ margin: '0px 0px 0px 28px' }}>
          <div className={styles.card_inputs} style={{ width: '93.8%' }}>
            <label>Descrição</label>
            <textarea
              className={`form-control ${styles.inputs}`}
              style={{ width: '100%' }}
              type="text"
              name="descricao"
              value={state.descricao}
              onChange={event => handleChange(event)}
            />
          </div>
        </Row>
        <hr className={styles.hr} />
        <Row style={{ margin: '20px 48px 0px 0px', display: 'flex', justifyContent: 'flex-end' }}>
          {state.editItem ?
            <>
              <Button variant="contained" onClick={() => handleEdit()} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
                Editar
              </Button>
              <Button variant="contained" onClick={() => changeView(true)} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
                Ver Tabela
              </Button>
            </>
            :
            <Button variant="contained" onClick={() => handleSave()} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
              Salvar
            </Button>
          }
          <Link to='/Campeonatos'>
            <Button variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#959C9C' }} className={styles.btn_salvar} color="primary">
              Cancelar
              </Button>
          </Link>
        </Row>
      </>
    )
  }
  const PreviewBracket = () => {
    function getAttrs(iframeTag) {
      var doc = document.createElement('div');
      doc.innerHTML = iframeTag;

      const iframe = doc.getElementsByTagName('iframe')[0];
      return [].slice
        .call(iframe.attributes)
        .reduce((attrs, element) => {
          attrs[element.name] = element.value;
          return attrs;
        }, {})
    }

    return (
      <div>
        <Row style={{ margin: '0px 0px 0px 28px' }}>
          <iframe {...getAttrs(state.iframe)} />
        </Row>
        <Row style={{ margin: '20px 48px 0px 0px', display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" onClick={() => changeView(false)} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
            Voltar
          </Button>
          <Link to='/Campeonatos'>
            <Button variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#959C9C' }} className={styles.btn_salvar} color="primary">
              Cancelar
          </Button>
          </Link>
        </Row >
      </div>
    )
  }


  return (
    <div className={styles.container}>
      {state.viewCampeonato ? PreviewBracket() : Cadastro()}
    </div>
  )
}

export default withRouter(CadastroCampeonatos);
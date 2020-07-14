import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import styles from './associacao.module.css'
import AulaDia from './aulaDia/auladia'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import api from '../../service/api'
import Select from 'react-select';



const Associacao = (props) => {
  const [state, setState] = useState({
    events: [],
    range: [],
    viewAula: false,
    start: new Date(),
    aulaId: '23d7fd22-baf2-4c41-b29e-686a78bd2b32',
    end: '',
    aula:[]
  })
  const localizer = momentLocalizer(moment)

  function changeView(event, view) {
    setState({ ...state, start: event.start, end: event.end, viewAula: view })
  }
  function setView(view) {
    setState({ ...state, viewAula: view })
  }
 async function setAulas(agenda, navigate) {
    const arrayModalidade = []
    let dataStart
    let dataEnd
    await api.get('api/aula').then(async (response) => { await response.data.map((item) => { arrayModalidade.push({ value: item.id, label: item.nome }) }) })

    const arrayAux = []
    if (agenda) {
      dataStart = moment('2000-01-01').format('YYYY-MM-DD')
      dataEnd = moment(navigate[6]).format('YYYY-MM-DD')
    }
    else {
      dataStart = moment('2000-01-01').format('YYYY-MM-DD')
      dataEnd = moment(navigate[0]).format('YYYY-MM-DD')
    }
    await api.get(`/api/aula/datas-aula/aulaId=${state.aulaId}&start=${dataStart}&end=${dataEnd}`, {
    })
      .then((response) => {
        response.data.map((item) => {
          arrayAux.push({
            id: item.id,
            title: item.nome,
            start: new Date(item.data),
            end: new Date(item.data),
            modalidade: item.modalidade,
          })
        })
        setState({ ...state, events: arrayAux, aula: arrayModalidade})
      })

  }

  useEffect(() => {
    setAulas(false, [new Date()])
  }, [])
  const message = {
    today: 'Hoje',
    previous: '<',
    next: '>',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    agenda: 'Resumo'
  }

  return (
    <div>
      {state.viewAula ? <AulaDia setView={setView} start={state.start} end={state.end} /> :
        <>
          <label className={styles.titulo}>
            <strong> Calendário de Aulas</strong>
          </label>
          <div className={styles.card_inputs} style={{ width: '46.1%', paddingLeft:'45px', paddingTop:'15px' }}>
            <Select
              name="modalidade"
              options={state.aula}
              value={state.aula.filter(option => option.value === state.aulaId)}
              onChange={event => [setState({ ...state, aulaId: event.value })]}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
          <Calendar
            selectable
            views={['week']}
            localizer={localizer}
            events={state.events}
            min={new Date(0, 0, 0, 5, 0, 0)}
            max={new Date(0, 0, 0, 23, 59, 0)}
            onRangeChange={(navigate) => setAulas(true, navigate)}
            messages={message}
            defaultView={Views.WEEK}
            defaultDate={new Date(state.start)}
            onSelectEvent={event => changeView(event, true)}
            className={styles.agenda}
          />
        </>}
    </div>
  )
}

export default Associacao
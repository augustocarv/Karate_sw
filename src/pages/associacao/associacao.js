import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import styles from './associacao.module.css'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'


const Associacao = (props) => {
  const [state, setState] = useState({
    events: [],
    range:[]
  })
  const localizer = momentLocalizer(moment)

  const handleSelect = ({ start, end }) => {
    console.log(moment(start).format('llll'))
    const title = window.prompt('New Event name')
    if (title)
      setState({
        events: [
          ...state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }
  useEffect(() => {
    console.log(state)
  }, [state])
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
      <label className={styles.titulo}>
        <strong>
          Calendário de Aulas
          </strong>
      </label>
      <Calendar
        selectable
        localizer={localizer}
        events={state.events}
        onRangeChange={(navigate) => console.log(navigate)}
        messages={message}
        defaultView={Views.WEEK}
        defaultDate={new Date(moment())}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={handleSelect}
        className={styles.agenda}
      />
    </div>
  )
}

export default Associacao
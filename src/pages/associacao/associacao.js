import React, {useState} from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import styles from './associacao.module.css'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'


const Associacao = (props) => {
  const [state, setState] = useState({
      events:[],
  })
  const localizer = momentLocalizer(moment)

  const handleSelect = ({ start, end }) => {
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
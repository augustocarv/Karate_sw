import React, { useState, useEffect } from 'react'
import Card from './components/card'
import api from '../../service/api'


const Associacao = (props) => {
    const [state, setState] = useState({
        atletas: 0,
        aulas: 0,
    })


    useEffect(() => {
        api.get('api/atleta').then((response) => {
            response.data.map(async (item) => {
                setState({ ...state, atletas: response.data.length })
            })
        })
    }, [])


    return (
        <div style={{ padding: '25px', display: 'flex' }}>
            <Card valores={state.atletas} titulo={'Alunos Cadastrados'} />
        </div>
    )
}

export default Associacao
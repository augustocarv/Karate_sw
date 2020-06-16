import React, { useState } from 'react';
import styles from './aulasfrequencias.module.css'
import { Radio } from 'semantic-ui-react';
import Button from '@material-ui/core/Button'
import { Upload, message } from 'antd';
import { Input, Label, Col, Row } from 'reactstrap';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const CadastroAulasFreq = () => {
    const [state, setState] = useState(
        {
            turma: '',
            estilo: '',
            diasSemana: new Date(),
            endereco: '',
            bairro: '',
            complemento: '',
            cep: '',
            estado: '',
            cidade: '',

        }
    )
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
                <div className={styles.card_inputs} style={{ width: '30%' }}>
                    <label>Dia da Semana</label>
                    <Input
                        className={styles.inputs}
                        style={{ width: '100%' }}
                        type="datetime-local"
                        name="diasSemana"
                        value={state.diasSemana}
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
            <Row style={{ margin: '20px 48px 0px 0px', display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
                    Salvar
                </Button>
                <Button variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#959C9C' }} className={styles.btn_salvar} color="primary">
                    Cancelar
                </Button>
            </Row>
        </div>
    )
}

export default CadastroAulasFreq;
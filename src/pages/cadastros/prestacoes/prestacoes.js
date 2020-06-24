import React from 'react';
import styles from './prestacoes.module.css'
import { Radio } from 'semantic-ui-react';
import Button from '@material-ui/core/Button'
import { Upload, message } from 'antd';
import { Input, Label, Col, Row, Card } from 'reactstrap';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const CadastroPrestacoes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top_form}>
        <div className={styles.title}>
          Novo Cadastro
                </div>
        <div className={styles.radio}>
          <Radio
            label='Entrada'
            name='funcao'
            value='Entrada'
            // checked={state.funcao === 'Entrada'}
            // onChange={event => handleChange(event)}
            className={styles.radio_funcao}
          />
          <Radio
            label='Saída'
            name='funcao'
            value='Saída'
            // checked={state.funcao === 'Saida'}
            // onChange={event => handleChange(event)}
            className={styles.radio_funcao}
          />
        </div>
      </div>
      <Row style={{ margin: '0px 0px 0px 28px' }}>
        <div className={styles.card_inputs} style={{ width: '30%' }}>
          <label>Descrição</label>
          <Input
            className={styles.inputs}
            style={{ width: '100%' }}
            type="text"
            name="turma"
          // value={state.turma}
          // onChange={event => handleChange(event)}
          />
        </div>
        <div className={styles.card_inputs} style={{ width: '30%' }}>
          <label>Valor</label>
          <Input
            className={styles.inputs}
            style={{ width: '100%' }}
            type="number"
            name="estilo"
          // value={state.estilo}
          // onChange={event => handleChange(event)}
          />
        </div>
        <div className={styles.card_inputs} style={{ width: '30%' }}>
          <label>Data</label>
          <Input
            className={styles.inputs}
            style={{ width: '100%' }}
            type="datetime-local"
            name="diasSemana"
          // value={state.diasSemana}
          // onChange={event => handleChange(event)}
          />
        </div>
      </Row>
      <hr className={styles.hr} />
      <Row style={{ margin: '0px 0px 0px 28px' }}>
      <label style={{ paddingLeft: '15px' }}>Upload Arquivo</label>
      <Col sm='12'>
        <Card body className={styles.card_up}>
          <UploadOutlined style={{ fontSize: '40px' }} />
        </Card>
        </Col>
      </Row>
      <hr className={styles.hr} />
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

export default CadastroPrestacoes;
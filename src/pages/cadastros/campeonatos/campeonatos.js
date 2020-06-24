import React from 'react';
import styles from './campeonatos.module.css'
import { Radio } from 'semantic-ui-react';
import Button from '@material-ui/core/Button'
import { Upload, message } from 'antd';
import { Input, Label, Col, Row, Card, Table } from 'reactstrap';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const CadastroCampeonatos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Novo Campeonato
    </div>
      <Col sm='12'>
        <Card>
          <Row style={{ margin: '0px 0px 0px 28px' }}>
            <div className={styles.card_inputs} style={{ width: '20%' }}>
              <Label>Vincular</Label>
              <Input type="select" name="vincular" className={styles.inputs}
              // value={state.vincular} onChange={event => handleChange(event)}
              >
                <option>Selecione</option>
                <option value='Arbitro'>Árbitro</option>
                <option value='Atleta'>Atleta</option>
              </Input>
            </div>
            <div className={styles.card_inputs} style={{ width: '30%' }}>
              <label>Nome</label>
              <Input type="select" name="nome" className={styles.inputs}
              // value={state.nome} onChange={event => handleChange(event)}
              >
                <option>Nome</option>
                <option value='João'>João</option>
              </Input>
            </div>
            <div>
              <Button variant="contained"
                style={{
                  margin: '20px 0 0 10px',
                  textTransform: 'capitalize',
                  backgroundColor: '#fc9643'
                }}
                color="primary">
                + adicionar
              </Button>
            </div>
          </Row>
          <Table bordered style={{ margin: '20px 0' }}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Nascimento</th>
                <th>Matrícula</th>
                <th>Kyo</th>
                <th>Vincular</th>
              </tr>
            </thead>
            <tbody>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </Table>
        </Card>
      </Col>
      <Row style={{ margin: '10px 0px 0px 0px' }}>
        <Col sm='4'>
          <Card>
            <label style={{ margin: '5px auto' }}>Árbitros</label>
          </Card>
        </Col>
        <Col sm='4'>
          <div className={styles.card_inputs} style={{ width: '100%' }}>
            <label style={{ margin: '2px auto' }}>Nome</label>
            <Input
              className={styles.inputs}
              style={{ width: '100%' }}
              type="text"
              name="nome"
            // value={state.nome}
            // onChange={event => handleChange(event)}
            />
          </div>
          <div className={styles.card_inputs} style={{ width: '100%' }}>
            <label style={{ margin: '2px auto' }}>Premiação</label>
            <Input
              className={styles.inputs}
              style={{ width: '100%' }}
              type="text"
              name="premiacao"
            // value={state.premiacao}
            // onChange={event => handleChange(event)}
            />
          </div>
          <div className={styles.card_inputs} style={{ width: '100%' }}>
            <label style={{ margin: '2px auto' }}>Estilo Competição</label>
            <Input
              className={styles.inputs}
              style={{ width: '100%' }}
              type="text"
              name="estilo"
            // value={state.estilo}
            // onChange={event => handleChange(event)}
            />
          </div>
          <div className={styles.card_inputs} style={{ width: '100%' }}>
            <label style={{ margin: '2px auto' }}>Modalidade</label>
            <Input
              className={styles.inputs}
              style={{ width: '100%' }}
              type="text"
              name="modalidade"
            // value={state.modalidade}
            // onChange={event => handleChange(event)}
            />
          </div>
        </Col>
        <Col sm='4'>
          <Card>
            <label style={{ margin: '5px auto' }}>Atletas</label>
          </Card>
        </Col>
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

export default CadastroCampeonatos;
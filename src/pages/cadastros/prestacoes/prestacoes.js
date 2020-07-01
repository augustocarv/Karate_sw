import React, { useState } from 'react';
import styles from './prestacoes.module.css'
import { Radio } from 'semantic-ui-react';
import Button from '@material-ui/core/Button'
import { Upload, message } from 'antd';
import { Input, Label, Col, Row, Card } from 'reactstrap';
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import ImageUploader from 'react-images-upload';

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});


const CadastroPrestacoes = () => {
  const [state, setState] = useState({
    pictures: [],
    status: '',
    imagens: null,
    descricao: '',
    valor: '',
    data: '',
  })

  async function onDropImagens(image) {
    if (image[0] !== undefined) {
      const result = await toBase64(image[0]).catch(e => e);
      setState({ ...state, imagens: result })
    } else {
      setState({ ...state, imagens: null })
    }
  }
  function handleChange(event) {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.top_form}>
        <div className={styles.title}>
          Novo Cadastro
        </div>
        <div className={styles.radio}>
          <Radio
            label='Entrada'
            name='status'
            value='Entrada'
            checked={state.status === 'Entrada'}
            onChange={event => handleChange(event)}
            className={styles.radio_funcao}
          />
          <Radio
            label='Saída'
            name='status'
            value='Saida'
            checked={state.status === 'Saida'}
            onChange={event => handleChange(event)}
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
            name="descricao"
            value={state.descricao}
            onChange={event => handleChange(event)}
          />
        </div>
        <div className={styles.card_inputs} style={{ width: '30%' }}>
          <label>Valor</label>
          <Input
            className={styles.inputs}
            style={{ width: '100%' }}
            type="number"
            name="valor"
            value={state.valor}
            onChange={event => handleChange(event)}
          />
        </div>
        <div className={styles.card_inputs} style={{ width: '30%' }}>
          <label>Data</label>
          <Input
            className={styles.inputs}
            style={{ width: '100%' }}
            type="datetime-local"
            name="data"
            value={state.data}
            onChange={event => handleChange(event)}
          />
        </div>
      </Row>
      <hr className={styles.hr} />
      <Row style={{ margin: '0px 0px 0px 28px' }}>
        <label style={{ paddingLeft: '15px' }}>Upload Arquivo</label>
        <Col sm='12'>
          <ImageUploader
            withIcon={true}
            label='Upload'
            singleImage={true}
            withPreview={true}
            fileSizeError='Imagem muito grande'
            fileTypeError='Imagem não suportado'
            buttonClassName='ButtonUpload'
            buttonText='Insira aqui'
            onChange={onDropImagens}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={1242880} />
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
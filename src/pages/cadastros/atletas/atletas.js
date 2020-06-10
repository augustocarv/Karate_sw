import React, { useState } from 'react';
import styles from './atletas.module.css'
import { Radio } from 'semantic-ui-react';
import { Upload, message } from 'antd';
import { InputGroup, Input, Label, Col, Row } from 'reactstrap';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const CadastroAtletas = () => {
    const [state, setState] = useState(
        {
            funcao: '',
            imagem: '',
            nome: '',
            matricula: '',
            dataInicio: '',
            nomeSocial: '',
            genero: '',
            dataNascimento: '',
            naturalidade: '',
            nacionalidade: '',
            profissao: '',
            email: '',
            cpf: '',
            rg: '',
            endereco: '',
            bairro: '',
            cep: '',
            estado: '',
            cidade: '',
            telefone: '',
            celular: '',
            mae: '',
            pai: '',
            responsavel: '',
            observacoes: '',
            graduacao: '',
            loading: false

        }
    )

    function handleChange(event) {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function changePhoto(info) {
        if (info.file.status === 'uploading') {
            setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                setState({
                    imagem: imageUrl,
                    loading: false,
                }),
            );
        }
    };

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('Apenas arquivos JPG/PNG!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Imagem precisa ser menor que 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    const uploadButton = (
        <div>
            {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
        </div>
    );



    return (
        <div className={styles.container}>
            <div className={styles.top_form}>
                <div className={styles.title}>
                    Novo Cadastro
                </div>
                <div className={styles.radio}>
                    <Radio
                        label='Aluno'
                        name='funcao'
                        value='Aluno'
                        checked={state.funcao === 'Aluno'}
                        onChange={event => handleChange(event)}
                        className={styles.radio_funcao}
                    />
                    <Radio
                        label='Monitor'
                        name='funcao'
                        value='Monitor'
                        checked={state.funcao === 'Monitor'}
                        onChange={event => handleChange(event)}
                        className={styles.radio_funcao}
                    />
                    <Radio
                        label='Instrutor'
                        name='funcao'
                        value='Instrutor'
                        checked={state.funcao === 'Instrutor'}
                        onChange={event => handleChange(event)}
                        className={styles.radio_funcao}
                    />
                    <Radio
                        label='Professor'
                        name='funcao'
                        value='Professor'
                        checked={state.funcao === 'Professor'}
                        onChange={event => handleChange(event)}
                        className={styles.radio_funcao}
                    />
                    <Radio
                        label='Mestre'
                        name='funcao'
                        value='Mestre'
                        checked={state.funcao === 'Mestre'}
                        onChange={event => handleChange(event)}
                        className={styles.radio_funcao}
                    />

                </div>
            </div>
            <div className={styles.content_form}>
                <div className={styles.form}>
                    <Col style={{ marginRight: '0px', marginLeft: '0px' }}>
                        <div style={{ display: 'flex', width: '80%' }}>
                            <div style={{
                                margin: '5px 10px 0 38px',
                            }}>
                                <Upload
                                    name="imagem"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    beforeUpload={beforeUpload}
                                    onChange={changePhoto}

                                >
                                    {state.imagem ? <img src={state.imagem} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>
                            </div>
                            <Row style={{ marginLeft: '0px', marginRight: '0px' }}>
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
                                <div className={styles.card_inputs} style={{ width: '20%' }}>
                                    <Label>Matrícula</Label>
                                    <Input
                                        disabled
                                        className={styles.inputs}
                                        type="text"
                                        name="matricula"
                                        value={state.matricula}
                                    />
                                </div>
                                <div className={styles.card_inputs} style={{ width: '25%' }}>
                                    <Label>Data de Inicio</Label>
                                    <Input
                                        className={styles.inputs}
                                        type="date"
                                        name="dataInicio"
                                        value={state.dataInicio}
                                        onChange={event => handleChange(event)}
                                    />
                                </div>
                                <div className={styles.card_inputs} style={{ width: '30%' }}>
                                    <Label>Nome Social</Label>
                                    <Input
                                        className={styles.inputs}
                                        type="text"
                                        name="nomeSocial"
                                        value={state.nomeSocial}
                                        onChange={event => handleChange(event)}
                                    />
                                </div>
                                <div className={styles.card_inputs} style={{ width: '20%' }}>
                                    <Label>Gênero</Label>
                                    <Input type="select" name="genero" className={styles.inputs} value={state.genero} onChange={event => handleChange(event)}>
                                        <option>Selecione</option>
                                        <option value='Masculino'>Masculino</option>
                                        <option value='Feminino'>Feminino</option>

                                    </Input>
                                </div>
                                <div className={styles.card_inputs} style={{ width: '25%' }}>
                                    <Label>Data de Nascimento</Label>
                                    <Input
                                        className={styles.inputs}
                                        type="date"
                                        name="dataNascimento"
                                        value={state.dataNascimento}
                                        onChange={event => handleChange(event)}
                                    />
                                </div>
                            </Row>
                        </div>
                        <hr style={{color:'black', borderStyle: 'dotted'}}></hr>
                    </Col>
                </div>
                <div className={styles.form_graduacao}>

                </div>
            </div>
        </div>
    )
}

export default CadastroAtletas;
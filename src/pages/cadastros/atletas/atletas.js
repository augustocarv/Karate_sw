import React, { useState, useEffect } from 'react';
import styles from './atletas.module.css'
import { Radio } from 'semantic-ui-react';
import Button from '@material-ui/core/Button'
import { Upload, message } from 'antd';
import { Input, Label, Col, Row } from 'reactstrap';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom'
import api from '../../../service/api'


const CadastroAtletas = (props) => {
    const [state, setState] = useState(
        {
            funcao: 0,
            imagem: '',
            nome: '',
            matricula: '',
            dataInicio: new Date(),
            nomeSocial: '',
            genero: '',
            dataNascimento: new Date(),
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
            telefoneCasa: '',
            telefoneTrabalho: '',
            celular: '',
            mae: '',
            pai: '',
            responsavel: '',
            informacoesAdicionais: '',
            graduacao: 0,
            complemento: '',
            editItem: false,
            loading: false

        }
    )
    useEffect(() => {
        if (props.location.state) {
            setState({
                imagem: props.location.state.imagem,
                nome: props.location.state.nome,
                naturalidade: props.location.state.naturalidade,
                nacionalidade: props.location.state.nacionalidade,
                profissao: props.location.state.profissao,
                tipoAtleta: props.location.state.funcao,
                graduacao: props.location.state.graduacao,
                dataInicio: new Date(props.location.state.dataInicio),
                dataNascimento: new Date(props.location.state.dataNascimento),
                email: props.location.state.email,
                cpf: props.location.state.cpf,
                rg: props.location.state.rg,
                rua: props.location.state.endereco,
                bairro: props.location.state.bairro,
                cep: props.location.state.cep,
                estado: props.location.state.estado,
                cidade: props.location.state.cidade,
                telefone: props.location.state.telefoneCasa,
                celular: props.location.state.celular,
                editItem: true
            })
        }
    }, [props])

    function handleSave() {
        api.post('api/atletas', {
            imagem: state.imagem,
            nome: state.nome,
            naturalidade: state.naturalidade,
            nacionalidade: state.nacionalidade,
            profissao: state.profissao,
            tipoAtleta: state.funcao,
            graduacao: state.graduacao,
            dataInicio: state.dataInicio,
            dataNascimento: state.dataNascimento,
            email: state.email,
            cpf: state.cpf,
            rg: state.rg,
            rua: state.endereco,
            bairro: state.bairro,
            cep: state.cep,
            estado: state.estado,
            cidade: state.cidade,
            telefone: state.telefoneCasa,
            celular: state.celular
        })
            .then((response) => {
                message.success('Sucesso ao gravar Atleta')
            })
            .catch((error) => {
                message.error('Erro ao gravar Atleta')
            })
    }
    function handleEdit() {
        if (props.location.state) {
            api.post('api/atletas', {
                id: props.location.state.id,
                imagem: state.imagem,
                nome: state.nome,
                naturalidade: state.naturalidade,
                nacionalidade: state.nacionalidade,
                profissao: state.profissao,
                tipoAtleta: state.funcao,
                graduacao: state.graduacao,
                dataInicio: state.dataInicio,
                dataNascimento: state.dataNascimento,
                email: state.email,
                cpf: state.cpf,
                rg: state.rg,
                rua: state.endereco,
                bairro: state.bairro,
                cep: state.cep,
                estado: state.estado,
                cidade: state.cidade,
                telefone: state.telefoneCasa,
                celular: state.celular
            })
                .then((response) => {
                    message.success('Sucesso ao editar Aula')
                })
                .catch((error) => {
                    message.error('Erro ao editar Aula')
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
                    <Col style={{ marginRight: '0px', marginLeft: '0px', padding: '0' }}>
                        <div style={{ display: 'flex' }}>
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
                            <Row style={{ marginLeft: '30px', marginRight: '0px' }}>
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
                                <div className={styles.card_inputs} style={{ width: '26.5%' }}>
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
                                <div className={styles.card_inputs} style={{ width: '26.5%' }}>
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
                        <hr className={styles.hr} />
                        <Row style={{ marginLeft: '28px', marginRight: '0px', marginBottom: '15px' }}>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>Naturalidade</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="naturalidade"
                                    value={state.naturalidade}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>Nacionalidade</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="nacionalidade"
                                    value={state.nacionalidade}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>Profissão</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="profissao"
                                    value={state.profissao}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                        </Row>
                        <Row style={{ marginLeft: '28px', marginRight: '0px', marginBottom: '25px' }}>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>Email</Label>
                                <Input
                                    className={styles.inputs}
                                    type="email"
                                    name="email"
                                    value={state.email}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>CPF</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="cpf"
                                    value={state.cpf}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>RG</Label>
                                <Input
                                    className={styles.inputs}
                                    type="number"
                                    name="rg"
                                    value={state.rg}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                        </Row>
                        <hr className={styles.hr} />
                        <Row style={{ marginLeft: '28px', marginRight: '0px', marginBottom: '15px' }}>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>Endereço</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="endereco"
                                    value={state.endereco}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>Bairro</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="bairro"
                                    value={state.bairro}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>Complemento</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="complemento"
                                    value={state.complemento}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                        </Row>
                        <Row style={{ marginLeft: '28px', marginRight: '0px', marginBottom: '25px' }}>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>CEP</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="cep"
                                    value={state.cep}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>Estado</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="estado"
                                    value={state.estado}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                            <div className={styles.card_inputs} style={{ width: '27.2%' }}>
                                <Label>Cidade</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="cidade"
                                    value={state.cidade}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                        </Row>
                        <hr className={styles.hr} />
                        <Row style={{ marginLeft: '28px', marginRight: '0px', marginBottom: '15px' }}>
                            <div className={styles.card_inputs} style={{ width: '42.2%' }}>
                                <Label>Telefone de Casa</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="telefoneCasa"
                                    value={state.telefoneCasa}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                            <div className={styles.card_inputs} style={{ width: '42.2%' }}>
                                <Label>Celular</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="celular"
                                    value={state.celular}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                        </Row>
                        <Row style={{ marginLeft: '28px', marginRight: '0px', marginBottom: '15px' }}>
                            <div className={styles.card_inputs} style={{ width: '42.2%' }}>
                                <Label>Mãe</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="mae"
                                    value={state.mae}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                            <div className={styles.card_inputs} style={{ width: '42.2%' }}>
                                <Label>Pai</Label>
                                <Input
                                    className={styles.inputs}
                                    type="text"
                                    name="pai"
                                    value={state.pai}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                        </Row>
                        <Row style={{ marginLeft: '28px', marginRight: '0px', marginBottom: '15px' }}>
                            <div className={styles.card_inputs} style={{ width: '87%' }}>
                                <Label>Informações Adicionais</Label>
                                <Input
                                    className={styles.inputs}
                                    style={{ height: '90px', minHeight: '90px' }}
                                    type="textarea"
                                    name="informacoesAdicionais"
                                    value={state.informacoesAdicionais}
                                    onChange={event => handleChange(event)}
                                />
                            </div>
                        </Row>
                        <Row style={{ marginLeft: '0px', marginRight: '0px', marginBottom: '15px', display: 'flex', justifyContent: 'flex-end', width: '91.5%' }}>
                            <div style={{ marginLeft: '29%' }}>
                                {state.editItem ?
                                    <Button variant="contained" onClick={() => handleEdit()} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
                                        Salvar
                                    </Button>
                                    :
                                    <Button variant="contained" onClick={() => handleSave()} style={{ textTransform: 'capitalize', backgroundColor: '#fc9643' }} className={styles.btn_salvar} color="primary">
                                        Salvar
                                    </Button>
                                }
                                <Button variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#959C9C' }} className={styles.btn_salvar} color="primary">
                                    Cancelar
                            </Button>
                            </div>
                        </Row>

                    </Col>
                </div>
                <div className={styles.form_graduacao} style={{ width: '30%' }}>
                    <Label>Graduação</Label>
                    <div style={{ border: '1px solid #A7A7A7', height: '50%', width: '80%' }}>
                        <Radio
                            label='Iniciante - Branca'
                            name='graduacao'
                            value='Branca'
                            checked={state.graduacao === 'Branca'}
                            onChange={event => handleChange(event)}
                            className={styles.graduacao}
                        />
                        <Radio
                            label='6º Kyu - Amarela'
                            name='graduacao'
                            value='Amarela'
                            checked={state.graduacao === 'Amarela'}
                            onChange={event => handleChange(event)}
                            className={styles.graduacao}
                        />
                        <Radio
                            label='5º Kyu - Vermelha'
                            name='graduacao'
                            value='Vermelha'
                            checked={state.graduacao === 'Vermelha'}
                            onChange={event => handleChange(event)}
                            className={styles.graduacao}
                        />
                        <Radio
                            label='4º Kyu - Laranja'
                            name='graduacao'
                            value='Laranja'
                            checked={state.graduacao === 'Laranja'}
                            onChange={event => handleChange(event)}
                            className={styles.graduacao}
                        />
                        <Radio
                            label='3º Kyu - Verde'
                            name='graduacao'
                            value='Verde'
                            checked={state.graduacao === 'Verde'}
                            onChange={event => handleChange(event)}
                            className={styles.graduacao}
                        />
                        <Radio
                            label='2º Kyu - Roxa'
                            name='graduacao'
                            value='Roxa'
                            checked={state.graduacao === 'Roxa'}
                            onChange={event => handleChange(event)}
                            className={styles.graduacao}
                        />
                        <Radio
                            label='1º Kyu - Marrom'
                            name='graduacao'
                            value='Marrom'
                            checked={state.graduacao === 'Marrom'}
                            onChange={event => handleChange(event)}
                            className={styles.graduacao}
                        />
                        <Radio
                            label='1º Dan - Preta'
                            name='graduacao'
                            value='Preta'
                            checked={state.graduacao === 'Preta'}
                            onChange={event => handleChange(event)}
                            className={styles.graduacao}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CadastroAtletas);
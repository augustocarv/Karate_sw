import React, { useState, useEffect } from 'react'
import styles from './login.module.css'
import { Card, Image } from 'semantic-ui-react'
import Atleta from '../../assets/images/Atleta.png'
import { GoMail } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { AiFillLock } from 'react-icons/ai'
import Button from '@material-ui/core/Button'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const Login = () => {
    const [state, setState] = useState(
        {
            email: '',
            password: ''
        }
    )
    function handleChange(event) {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }
    function Login() {
        sessionStorage.setItem('token', '12345')
        window.location.href = "/Dashboard"
    }
    return (
        <div className={styles.main}>
            {/* <Image src={Atleta} fluid /> */}
            <Card className={styles.card}>
                <div className={styles.card_header}>
                    <div className={styles.card_header_title}>
                        Acesse SmartDojo
                    </div>
                </div>
                <div className={styles.card_content}>
                    <InputGroup className={styles.card_content_input}>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText className={styles.card_content_input_icon}>
                                <GoMail />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            className={styles.card_content_input_text}
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={state.email}
                            onChange={event => handleChange(event)}
                        />
                    </InputGroup>
                    <InputGroup className={styles.card_content_input}>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText className={styles.card_content_input_icon}>
                                <AiFillLock />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            className={styles.card_content_input_text}
                            type="password"
                            placeholder="Senha"
                            name="password"
                            value={state.password}
                            onChange={event => handleChange(event)}
                        />
                    </InputGroup>
                    <Button
                        variant="contained"
                        onClick={() => Login()}
                        className={styles.card_content_button}>
                        Login
                    </Button>
                </div>
            </Card>
        </div>
    )
}
export default Login
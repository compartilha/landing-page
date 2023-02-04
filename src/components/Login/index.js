import React, { useState } from 'react'
import * as S from './styled'
import Logo from '../../images/logo-novo.png'

const Login = () => {

    const [userType, setUserType] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!userType || !email || !password) {
            setError("Preencha todos os campos")
            return
        }

        setError("Credenciais inválidas")
    }

    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>Sistema para gestão de troca de hemocomponentes entre hemocentros</S.Title>
            </S.TitleContainer>
            <S.Logo src={Logo} />

            <S.FormContainer>
                <S.FormTitle>
                    Bem-vindo de volta!
                </S.FormTitle>
                <S.UserSelectorContainer>
                    <S.UserSelector
                        onClick={() => setUserType("NETWORK")}
                        selected={userType === "NETWORK"}
                    >
                        <S.UserSelectorIcon icon="akar-icons:network" />
                        <S.UserSelectorName>
                            Gestor de Rede
                        </S.UserSelectorName>
                    </S.UserSelector>
                    <S.UserSelector
                        onClick={() => setUserType("HEMOCENTER")}
                        selected={userType === "HEMOCENTER"}
                    >
                        <S.UserSelectorIcon icon="mdi:hospital-marker" />
                        <S.UserSelectorName>
                            Usuário de Hemocentro
                        </S.UserSelectorName>
                    </S.UserSelector>
                </S.UserSelectorContainer>


                <S.FormInput
                    type="email"
                    placeholder={`${userType === "hemocentro" ? "nome de usuário" : "email@exemplo.com"}`}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <S.FormInput
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <S.FormButton
                    type="submit"
                    value="Submit"
                    onClick={(e) => handleLogin(e)}
                >
                    Entrar
                </S.FormButton>


            </S.FormContainer>

            {
                error &&
                <S.ErrorContainer>
                    <S.ErrorLogo icon="jam:triangle-danger" />
                    <S.ErrorMessage>
                        {error}
                    </S.ErrorMessage>
                </S.ErrorContainer>
            }
        </S.Container>
    )
}

export default Login
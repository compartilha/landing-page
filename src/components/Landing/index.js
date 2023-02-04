import React, { useState } from 'react'
import * as S from './styled'
import Logo from '../../images/logo-novo.png'
import LogoBranco from '../../images/logo-branco.png'
import GaragemLogo from '../../images/bndes-garagem.png'
import GaragemApoiadores from '../../images/garagem-apoiadores.png'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

    const [activeMenu, setActiveMenu] = useState(false)

    const navigate = useNavigate()

    const scrollTo = id => {
        const node = document.getElementById(id)
        node && node.scrollIntoView({ behavior: "smooth", block: "start"})
    }

    return (
        <S.Container
            onClick={() => {
                if(activeMenu) setActiveMenu(false)
            }}
        >
            <S.Header id="header">
                <S.NavBar>
                    <S.LogoContainer>
                        <S.Logo 
                          src={Logo}
                          onClick={() => scrollTo("presentation")}
                        />
                    </S.LogoContainer>
                    <S.Hamburguer
                        onClick={() => setActiveMenu(!activeMenu)}
                    >
                        <S.HamburguerLine active={activeMenu} line={1}/>
                        <S.HamburguerLine active={activeMenu} line={2}/>
                        <S.HamburguerLine active={activeMenu} line={3}/>
                    </S.Hamburguer>
                    <S.ActionItemContainer active={activeMenu}>
                            <S.ActionItem
                                to="/"
                                onClick={() => scrollTo("about-us")}
                            >
                                Quem somos
                            </S.ActionItem>

                            <S.ActionItem
                                to="/"
                                onClick={() => scrollTo("solution")}
                            >
                                Solução
                            </S.ActionItem>

                            <S.ActionItem
                                to="/"
                                onClick={() => scrollTo("support")}
                            >
                                Apoio
                            </S.ActionItem>
                            
                            <S.ActionItem
                                to="/"
                                onClick={() => scrollTo("contact")}
                            >
                                Contato
                            </S.ActionItem>
                            <S.Button
                                onClick={() => navigate("/entrar")}
                            >
                                Acessar
                            </S.Button>
                        </S.ActionItemContainer>
                </S.NavBar>
            </S.Header>

            <S.PresentationSection id="presentation">
                <S.HighlightedText>
                    Compartilha
                </S.HighlightedText>

                <S.SubText>
                    Aplicando modelagem matemática para otimizar o
                    compartilhamento de hemocomponentes entre
                    bancos de sangue
                </S.SubText>

                <S.Button
                    onClick={() => scrollTo("contact")}
                >
                    Contate-nos
                </S.Button>
            </S.PresentationSection>

            <S.DefinitionSection id="about-us">
                <S.SectionTitleVariant>
                    Quem somos
                </S.SectionTitleVariant>
                <S.Divider />
                <S.DefinitionText>
                Uma startup de impacto sócio-ambiental que otimiza a negociação de hemocomponentes entre bancos de sangue para:
                <S.DefinitionList>
                    <S.DefinitionItem>Melhorar o cuidado com a população;</S.DefinitionItem>
                    <S.DefinitionItem>Reduzir o descarte de hemocomponentes;</S.DefinitionItem>
                    <S.DefinitionItem>Reduzir os gastos com resíduos infecto-contaminantes;</S.DefinitionItem>
                </S.DefinitionList>
                </S.DefinitionText>
                <S.Divider />
            </S.DefinitionSection>

            <S.SolutionSection id="solution">
                <S.SectionTitle>
                    Solução
                </S.SectionTitle>

                <S.InfoContainer>
                    <S.InfoCard>
                        <S.InfoIconContainer>
                            <S.InfoIcon icon="healthicons:blood-bag"/>
                        </S.InfoIconContainer>
                        <S.InfoTitle>
                            O que é
                        </S.InfoTitle>
                        <S.InfoText>
                            Um sistema que auxiliará bancos de sangue a melhor gerir
                            o seu estoque de hemocomponentes, evitando descarte por
                            expiração de prazo de validade do produto.
                        </S.InfoText>
                    </S.InfoCard>
                    <S.InfoCard>
                        <S.InfoIconContainer>
                            <S.InfoIcon icon="icon-park-outline:collect-computer"/>
                        </S.InfoIconContainer>
                        <S.InfoTitle>
                            Como funciona
                        </S.InfoTitle>
                        <S.InfoText>
                            Cada hemocentro informa sua disponibilidade e falta de produtos
                            de sangue e o sistema estabelece como acontecerá a melhor solução
                            de troca, levando em consideração a data de validade no caso da oferta
                            e a criticidade para a demanda.  
                        </S.InfoText>
                    </S.InfoCard>
                </S.InfoContainer>
            </S.SolutionSection>

            <S.SupportSection id="support">
                <S.SectionTitle>
                    Apoio
                </S.SectionTitle>
                <S.GaragemLogo src={GaragemLogo}/>
                <S.GaragemApoiadoresContainer>
                    <S.GaragemApoiadores src={GaragemApoiadores} />
                </S.GaragemApoiadoresContainer>
            </S.SupportSection>

            <S.ContactSection id="contact">
                <S.SectionTitle>
                    Contato
                </S.SectionTitle>

                <S.FormContainer
                    action="https://formspree.io/f/xbjbvpnn"
                    method="POST"
                >
                    <S.FormItemContainer>
                        <S.FormLabel htmlFor="name">
                            nome
                        </S.FormLabel>
                        <S.formTextInput id="name" name="name" type="text"/>
                    </S.FormItemContainer>

                    <S.FormItemContainer>
                        <S.FormLabel htmlFor="email">
                            email
                        </S.FormLabel>
                        <S.formTextInput id="email" name="email" type="email"/>
                    </S.FormItemContainer>

                    <S.FormItemContainer>
                        <S.FormLabel htmlFor="subject">
                            assunto
                        </S.FormLabel>
                        <S.formTextInput id="subject" name="subject" type="text"/>
                    </S.FormItemContainer>

                    <S.FormItemContainer>
                        <S.FormLabel htmlFor="message">
                            mensagem
                        </S.FormLabel>
                        <S.messageInput id="message" name="message" rows="5" cols="33" />
                    </S.FormItemContainer>

                    <input type="hidden" name="_language" value="pt-BR" />
                    <S.Button alignCenter={true}>
                        Enviar
                    </S.Button>
                </S.FormContainer>
            </S.ContactSection>

            <S.Footer>
                <S.Logo
                    src={LogoBranco}
                    onClick={() => scrollTo("presentation")}
                />
            </S.Footer>
        </S.Container>
        
    )
}

export default Landing
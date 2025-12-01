import Fundo from '../../components/Fundo'
import styled from 'styled-components'
import '../Cadastro/Cadastro.css'
import Barra from '../../components/Barra'
import LoginDiv from '../../components/FormLogin'
import { useEffect,useState } from 'react'

export const Container = styled.div`
  position: relative; 
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const EspacoBarraForm = styled.div`
  position: relative;  
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 500px;
  padding: 0 42%;
`

const FundoStyled = styled(Fundo)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`




  const Login = () => {

  async function fazLogin(e) {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          senha
        })
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.message || "Erro ao fazer login");
        return;
      }

      // salva token no navegador
      localStorage.setItem("token", dados.access_token);




    } catch (error) {
      setErro("Erro no servidor");
    }
  }


  return (
    <Container>
      <FundoStyled />
        <EspacoBarraForm>
            <Barra />
            <LoginDiv /> 
        </EspacoBarraForm>
</Container>

  )
  }

export default Login;

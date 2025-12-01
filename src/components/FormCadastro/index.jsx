import {  useState } from "react"
import {GuardaForm, FundoForm, Inputs} from '../FormLogin' 
import Botao from '../Botao';
import { Textoh2 } from "../FormLogin"

export default function CadastroDiv  (){
const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault(); 
    const novoUsuario={ nome, email, cargo,  senha};


      try {
    const response = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoUsuario)
    });

    if (response.ok) {
      alert('Usuário cadastrado com sucesso!');
      setNome('');
      setEmail('');
      setCargo('');
      setSenha('');
    } else {
      const erro = await response.json();
      alert('Erro ao cadastrar: ' + erro.message);
    }
  } catch (error) {
    console.error('Erro de conexão:', error);
    alert('Erro ao conectar ao servidor.');
  }
};

return(
<GuardaForm>
<FundoForm $height="52vh" $Gap="45px" $width="20vw">
  
      <Textoh2 $marginbottom='0'>Cadastro</Textoh2>

      <Inputs $padding="18px"
        type="text" 
        value={nome} 
        placeholder='Nome'
        onChange={(e) => setNome(e.target.value)} 
        required 
        autoComplete='off'
      />

      <Inputs $padding="18px"
        type="email"
        value={email}
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="new-email" 

      />

      <Inputs $padding="18px"
        type="text" 
        value={cargo} 
        placeholder='Cargo'
        onChange={(e) => setCargo(e.target.value)} 
        required
        autoComplete='off'
      />

      <Inputs  $padding="18px"
        type="password" 
        value={senha} 
        placeholder='Senha'
        onChange={(e) => setSenha(e.target.value)} 
        required 
        autoComplete='new-password'
      />

   <Botao
  onClick={handleSubmit}  
  redirectTo="/"   
>
  Cadastrar
</Botao>

    </FundoForm>
    </GuardaForm>
  );

}

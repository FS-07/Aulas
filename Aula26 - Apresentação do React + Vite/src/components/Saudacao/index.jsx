import './style.css';

function Saudacao({nome, sobrenome}) {
    return <p className='titulo'>Olá, {nome} {sobrenome}! Seja bem vindo!</p>
}

export default Saudacao;
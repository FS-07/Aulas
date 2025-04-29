import './App.css'
import Saudacao from './components/Saudacao'
import Formulario from './components/Formulario'

function App() {

  return (
    <>
      <Saudacao nome="João" sobrenome="Costa"/>
      <Formulario />
    </>
  )
}

export default App


// Navegador ler o arquivo index.html
// O arquivo index.html é o ponto de entrada da aplicação
// o arquivo main.jsx é o ponto de entrada do React
// O arquivo App.jsx é o componente principal da aplicação
// O arquivo App.css é o arquivo de estilos da aplicação

// O arquivo vite.config.js é o arquivo de configuração do Vite

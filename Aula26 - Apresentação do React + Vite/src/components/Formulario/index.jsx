import './form.css'

function Formulario () {

    return (
        <div className="container">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <button type="submit" onClick={() => alert('Enviado com sucesso!')}>Enviar</button>
        </div>
    )
}

export default Formulario
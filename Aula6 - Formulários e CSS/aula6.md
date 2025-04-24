# Aula 6: Formulários em HTML e Introdução ao CSS
## Objetivos da Aula
## Criar formulários interativos usando form, input, select, textarea e button

- Aprender os três métodos de aplicação de CSS: inline, interno e externo.
- Estilizar formulários com propriedades básicas de CSS (color, background, padding, border).
- Organizar o código seguindo boas práticas de separação entre HTML e CSS.

---

1. Formulários em HTML
Estrutura Básica (`<form>`)
html

```html
<form action="/enviar-dados" method="POST">
    <!-- Campos do formulário aqui -->
</form>
```

action: Define para onde os dados serão enviados.

method:

GET → Dados visíveis na URL (para buscas).

POST → Dados enviados ocultos (para cadastros, login).

Campos de Entrada
Tag / Atributo	Descrição
```html
<input type="text">	Campo de texto simples.
<input type="email">	Valida se o texto é um e-mail válido.
<input type="password">	Oculta o texto digitado (*****).
<input type="number">	Aceita apenas números.
<select> + <option>	Lista suspensa (dropdown). Exemplo:	
<select name="cidade">	
<option>Rio</option>	
<option>São Paulo</option>	
</select>	

<textarea>	Área de texto multilinha. Exemplo:
	
<textarea name="mensagem" rows="4"></textarea>	

<input type="checkbox">	Caixa de seleção múltipla.
<input type="radio">	Seleção única (em grupo com mesmo name).
```

### Atributos Importantes: 
Atributo	Função
name	Identifica o campo ao enviar dados (obrigatório para back-end).
placeholder	Texto de exemplo dentro do campo (ex: "Digite seu e-mail").
required	Campo obrigatório (não envia o formulário se vazio).
value	Define um valor padrão (ex: value="Brasil").
Botões
```html
<input type="submit" value="Enviar"> <!-- Botão de envio padrão -->
<button type="submit">Enviar</button> <!-- Versão moderna -->
<button type="button">Cancelar</button> <!-- Botão sem ação padrão -->
2. Introdução ao CSS
Métodos de Aplicação
1. CSS Inline (no HTML)
html
<p style="color: blue; font-size: 16px;">Texto azul</p>
Vantagem: Rápido para testes.


Desvantagem: Dificulta manutenção (não reutilizável).

2. CSS Interno (dentro do <head>)
html
<head>
    <style>
        p {
            color: red;
            font-family: Arial;
        }
    </style>
</head>
Vantagem: Organizado em uma única página.

Desvantagem: Não é compartilhado entre múltiplas páginas.

3. CSS Externo (arquivo .css separado)
html
<head>
    <link rel="stylesheet" href="estilos.css">
</head>
Conteúdo de estilos.css:

css
p {
    color: green;
    margin: 10px;
}
Vantagem: Reutilizável em várias páginas (melhor prática).

Desvantagem: Requer um arquivo adicional.

Propriedades Básicas
Propriedade	Exemplo	Efeito
color	color: #FF0000;	Cor do texto.
background-color	background-color: #EEE;	Cor de fundo.
font-family	font-family: Arial;	Fonte do texto.
margin	margin: 20px;	Espaçamento externo.
padding	padding: 10px;	Espaçamento interno.
border	border: 1px solid black;	Borda (largura, estilo, cor).
Exemplo: Estilizando um Formulário
css
form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
}

input, select, textarea {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ccc;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
}

```

### 3. Boas Práticas e Organização
Separação de HTML e CSS
Evite CSS inline (use interno ou externo para projetos reais).

Estrutura de pastas recomendada:

projeto/
├── index.html
├── css/
│   └── estilos.css
└── imagens/
Comentários em CSS
css
/* Cor principal do cabeçalho */
header {
    background-color: #333;
}
Padronização de Código
Indentação: Use 2 ou 4 espaços.

Nomes descritivos: Ex: .botao-primario em vez de .btn1.

O Que Será Avaliado?
Formulários Corretos:

Uso de `<form>`, campos (`<input>`, `<select>`), e botões.

Atributos como placeholder, required, e name.

Aplicação de CSS:

Demonstração dos três métodos (inline, interno, externo).

Estilização básica (cores, espaçamento, bordas).

Organização:

Código indentado e comentado (se necessário).

Separação entre HTML e CSS (preferência por arquivos externos).

Exercício Prático
Crie um formulário de cadastro com:

Nome (text), E-mail (email), Senha (password), Estado (select), e Mensagem (textarea).

Botão "Enviar" e "Limpar".

Estilize o formulário usando CSS externo:

Fundo claro, bordas arredondadas, e botão verde.

Desafio: Adicione um campo de checkbox para "Concordo com os termos".

Recursos Úteis:

[W3Schools: CSS Tutorial](https://www.w3schools.com/css/)

[MDN Web Docs: Aprenda sobre Formulários](https://developer.mozilla.org/pt-BR/docs/Learn/Forms)
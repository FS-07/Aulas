# Introdução ao HTML: Conceitos e Estrutura Básica

## O que é HTML?

**HTML** (HyperText Markup Language) é a linguagem padrão para criação de páginas web. Ele define a estrutura e o significado do conteúdo em um site, utilizando **marcações (tags)** para identificar diferentes elementos.

### Origem e Evolução do HTML
- Criado por **Tim Berners-Lee** no início dos anos 1990.
- Versões principais: 
  - HTML 4.01 (1999)
  - XHTML (2000)
  - **HTML5** (2014, versão moderna com novos elementos e APIs).

### Diferenças entre HTML, CSS e JavaScript
| Tecnologia  | Função Principal                                                                 |
|-------------|----------------------------------------------------------------------------------|
| **HTML**    | Estrutura e conteúdo (esqueleto da página).                                      |
| **CSS**     | Estilização (cores, fontes, layout).                                             |
| **JavaScript** | Interatividade (animações, respostas a usuários).                             |

---

## Estrutura Básica de um Documento HTML5

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Título da Página</title>
</head>
<body>
    <!-- Conteúdo visível vai aqui -->
</body>
</html>

Elementos Principais:
<!DOCTYPE html>: Declara o tipo de documento (HTML5).

<html>: Raiz do documento.

Atributo lang define o idioma (ex: pt-BR).

<head>: Contém metadados (não visíveis no navegador).

<meta charset="UTF-8">: Define a codificação de caracteres.

<title>: Título da aba/navegador (importante para SEO).

<body>: Todo o conteúdo visível (textos, imagens, etc.).

Tags Fundamentais de Conteúdo
Cabeçalhos (<h1> a <h6>)
Hierarquia de títulos (do mais importante ao menos importante):

html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Seção</h3>
Parágrafos (<p>)
html
<p>Este é um parágrafo. HTML ignora quebras de linha no código-fonte.</p>
Quebras de Linha (<br>) e Espaçamentos
<br>: Força uma quebra de linha (tag vazia, sem fechamento).

Espaçamentos: Use CSS para controle preciso (margin, padding).

Boas Práticas de Organização
Indentação e Legibilidade
html
<body>
    <header>
        <h1>Meu Site</h1>
        <nav>...</nav>
    </header>
    <main>
        <article>...</article>
    </main>
</body>
Comentários
html
<!-- Isto é um comentário (não aparece no navegador) -->
Estrutura Limpa
Separação lógica: Use tags semânticas (<header>, <footer>).

Nomes descritivos: Para classes e IDs (ex: class="menu-principal").

Evitar redundâncias: Não repita estilos inline; prefira CSS externo.

Próximos Passos: Aprender sobre listas (<ul>, <ol>), links (<a>) e imagens (<img>).


### Observações:
1. O Markdown inclui:
   - Títulos (`#`, `##`).
   - Tabelas comparativas.
   - Blocos de código (para exemplos HTML).
   - Ênfase em **negrito** e listas.
2. Adapte os exemplos conforme necessário (ex: adicione mais tags ou detalhes).
# Aula 5: Tabelas e Listas em HTML

## Objetivos da Aula
- Criar tabelas com tags semânticas (`<table>`, `<thead>`, `<tr>`, etc.).
- Diferenciar listas ordenadas (`<ol>`) e não ordenadas (`<ul>`).
- Organizar informações de forma clara e acessível.

---

## Introdução às Tabelas em HTML

### Estrutura Básica
```html
<table>
    <tr> <!-- Linha (table row) -->
        <td>Célula 1</td> <!-- Table data -->
        <td>Célula 2</td>
    </tr>
</table>
Tags Semânticas
Tag	Função
<table>	Define a tabela.
<thead>	Cabeçalho da tabela (contém <th>).
<tbody>	Corpo da tabela (dados principais).
<tfoot>	Rodapé (ex.: totais, notas).
<th>	Célula de cabeçalho (negrito e centralizado por padrão).
<tr>	Linha da tabela.
<td>	Célula de dados.
Exemplo Completo
html
<table border="1"> <!-- border apenas para visualização -->
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ana</td>
            <td>25</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total:</td>
            <td>1</td>
        </tr>
    </tfoot>
</table>
Atributos Avançados
colspan: Mescla colunas.

html
<td colspan="2">Mesclado</td>
rowspan: Mescla linhas.

html
<td rowspan="2">Mesclado</td>
Boas Práticas de Acessibilidade
Use <caption> para descrever a tabela.

Sempre utilize <th> para cabeçalhos.

Evite tabelas para layout (prefira CSS Grid/Flexbox).

Listas em HTML
Listas Não Ordenadas (<ul>)
html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
Marcadores padrão: círculos (•).

Uso comum: Menus, itens sem ordem prioritária.

Listas Ordenadas (<ol>)
html
<ol>
    <li>Primeiro passo</li>
    <li>Segundo passo</li>
</ol>
Marcadores: Números (1, 2, 3), letras (type="A"), ou algarismos romanos (type="I").

Listas Aninhadas
html
<ul>
    <li>Front-end
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
</ul>
Estilos de Marcadores (CSS)
html
<ul style="list-style-type: square;">
    <li>Item quadrado</li>
</ul>
Opções: disc, circle, square, none.

Exemplos e Boas Práticas
Quando Usar Tabelas vs. Listas?
Tipo de Informação	Estrutura Recomendada
Dados tabulares (ex.: grades, comparações)	Tabelas
Itens sequenciais (ex.: passos, rankings)	Listas ordenadas
Itens sem ordem (ex.: features, menus)	Listas não ordenadas
Exemplo Semântico
html
<!-- Tabela para dados financeiros -->
<table>
    <caption>Orçamento Mensal</caption>
    <thead>...</thead>
    <tbody>...</tbody>
</table>

<!-- Lista para etapas -->
<ol>
    <li>Ferva água</li>
    <li>Adicione café</li>
</ol>
Exercício Prático
Crie uma tabela com 3 colunas: Produto, Preço, Estoque.

Insira uma lista aninhada de categorias de produtos.

Mescle duas células usando colspan.

Dica: Use MDN Web Docs para referência.


---

### Destaques do Material:
- **Exemplos interativos**: Códigos HTML prontos para teste.
- **Comparações claras**: Tabelas vs. listas.
- **Foco em semântica e acessibilidade**.
- **Exercício prático** para fixação.
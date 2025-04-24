# Aula 7: Layouts Responsivos com Flexbox

## Objetivos da Aula
- Dominar o modelo **Flexbox** e suas propriedades principais.
- Criar layouts **horizontais**, **verticais** e **responsivos**.
- Aprender a alinhar elementos de forma eficiente para projetos escaláveis.

---

## 1. Conceito do Flexbox

### Por que Flexbox?
- Solução moderna para problemas de alinhamento que antes exigiam:
  - `float` (quebra de layout)
  - `position` (código complexo)
  - `tables` (não semântico).

### Vantagens
✅ Alinhamento **simplificado** (horizontal/vertical)  
✅ Distribuição **inteligente** de espaços  
✅ **Responsividade** nativa  
✅ Código **menos verboso** que métodos antigos

---

## 2. Propriedades do Container Flex

### Ativando Flexbox
```css
.container {
    display: flex; /* Transforma em container flex */
}
Direção dos Itens (flex-direction)
Valor	Efeito
row (padrão)	Itens em linha (→)
column	Itens em coluna (↓)
row-reverse	Inverte ordem (←)
column-reverse	Inverte coluna (↑)
Alinhamento Principal (justify-content)
Controla o eixo horizontal (se flex-direction: row):

css
.container {
    justify-content: center; /* Opções: flex-start, flex-end, space-between, space-around */
}
Alinhamento Secundário (align-items)
Controla o eixo vertical:

css
.container {
    align-items: center; /* Opções: flex-start, flex-end, stretch, baseline */
}
Quebra de Linha (flex-wrap)
css
.container {
    flex-wrap: wrap; /* Itens quebram para próxima linha se não couberem */
}
3. Propriedades dos Itens Flex
Crescimento (flex-grow)
css
.item {
    flex-grow: 1; /* Ocupa espaço extra proporcionalmente */
}
Redução (flex-shrink)
css
.item {
    flex-shrink: 0; /* Impede que o item encolha */
}
Tamanho Base (flex-basis)
css
.item {
    flex-basis: 200px; /* Tamanho inicial antes de distribuir espaço */
}
Atalho (flex)
css
.item {
    flex: 1 0 200px; /* grow | shrink | basis */
}
Alinhamento Individual (align-self)
css
.item-especial {
    align-self: flex-end; /* Sobrescreve align-items do container */
}
4. Exemplos Práticos
Barra de Navegação Horizontal
html
<nav class="menu">
    <a href="#">Home</a>
    <a href="#">Sobre</a>
    <a href="#">Contato</a>
</nav>
css
.menu {
    display: flex;
    justify-content: space-around;
    background: #333;
    padding: 10px;
}
.menu a {
    color: white;
    text-decoration: none;
}
Grid Responsivo
html
<div class="grid">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.item {
    flex: 1 1 200px; /* Cresce, encolhe, base de 200px */
    background: #eee;
    padding: 20px;
}
Centralização Perfeita
css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}
5. Boas Práticas
Responsividade com Media Queries
css
@media (max-width: 600px) {
    .menu {
        flex-direction: column; /* Nav vira coluna em mobile */
    }
}
Classes Reutilizáveis
css
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
Código Limpo
Evite valores fixos demais (use flex-grow).

Nomeie classes semanticamente (ex: .card-list em vez de .flex-1).

Exercício Prático
Crie um card de produto com:

Imagem no topo.

Título e descrição centralizados.

Botão "Comprar" alinhado no rodapé.

Transforme uma lista em um grid de 3 colunas que vira 1 coluna em mobile.

Dica: Use flex-direction: column para o card e flex-wrap para o grid.
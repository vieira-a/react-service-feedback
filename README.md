<h1 align="center"> Service Feedback </h1>
<p align="center">Em construção</p>

<p align="center">
Projeto pessoal para praticar conhecimentos adquiridos em React JS.
</p>

<p align="center">
  <a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Aprendizado">O que aprendi</a>
</p>

<br>

<p align="center">
  <img alt="Service Feedback" src=".github/bg-cover.png" width="100%">
</p>

## Tecnologias

Esse projeto está sendo desenvolvido com as seguintes tecnologias:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [React JS](https://pt-br.reactjs.org/)
- [Styled-components](https://styled-components.com/)
- [Node e NPM](https://nodejs.org/)
- [Vite](https://vitejs.dev/)

## Projeto

O Service Feedback é uma aplicação SPA ([Single Page Application](https://en.wikipedia.org/wiki/Single-page_application)) que exibe um formulário que o usuário possa expressar o seu nível de satisfação com um serviço/produto recebido.
### Requisitos funcionais

- O usuário preenche as informações necessárias: nome, email, nível de satifação e nível de recomendação.
- Durante a avaliação, o usuário poderá retornar ao passo anterior para modificar qualquer informação antes do envio/confirmação.

## Desenvolvimento
### Sprint 1: Inicilizarção, configurações iniciais e primeiros passos
Inicio: 16/01/2023 | Fim: 23/01/202

**Tarefas**
- [x] Inicializar projeto
- [x] Setup do projeto
  - [x] Construir README
  - [x] Configurar arquivos iniciais e instalar dependências
    - [x] Styled-components
    - [x] React-Router-Dom
    - [x] Phospher Icons
    - [x] GlobalStyle (estilos globais, tipografia e cores)
- [x] Criar estrutura de arquivos
  - [x] Componentes (páginas) principais: informações do usuário, registro de satisfação e recomendações do usuário, e página final da aplicação.

- [x] Criar contexto com Context API para compartilhar dados entre as páginas 
- [x] Criar controles para navegar entre os componentes

- [x] Criar componentes estáticos e importá-los para as páginas que irão exibí-los
  - [x] Header
  - [x] Footer

- [x] Criar conteúdo das páginas
  - [x] UserInfo
  - [x] UserSatisfaction
  - [x] UserRecomendation

*Sobre o componente UserRecomendation:*

Este componente irá exibir um sistema de score em formato de ícones, aonde o usuário poderá selecionar a quantidade de pontos de recomendação.
Ao selecionar acima de 1 ponto, a aplicação deve selecionar todos os ícones anteriores. Exemplo: caso o usuário selecione a segunda estrela (que simboliza 2 pontos), a aplicação deve selecionar a primeira estrela também.

- [x] Criar inputs estilizados com imagem conforme o layout

## Sprint 2: Finalização
Inicio: 23/01/2023 | Fim: 30/01/2022

**Tarefas**
- [ ] Adicionar campo para texto no componente UserSatisfaction aonde o usuário possa expressar sua opinião sobre o serviço prestado.
- [ ] Criar função para seleção automática de pontuação nos casos em que o usuário selecionar a partir do segundo ícone no componente UserRecomendarion.
- [ ] Construir componente FeedbackFinish, responsável por mostrar um resumo da avaliação do usuário e opção de envio do mesmo.
- [ ] Simular envio das informações em formato próprio para um suposto backend.


## Layout

Utilizei o Figma para construção dos componentes e montagem do layout.

## Aprendizado

- Em construção.

---

Feito por [Anderson Vieira](https://linkedin/in/vieira-a)
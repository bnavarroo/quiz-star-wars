<p align="center">
  <img src="https://github.com/bnavarroo/quiz-star-wars/blob/master/src/assets/img/darth-logo.svg" alt="Quiz Star Wars" width="300px" />
  <h1 align="center">Quiz Star Wars</h1>
</p>
<p align="center">
  <a href="https://quiz-star-wars-bnavarroo.vercel.app" target="_blank">
    Clique aqui para ver a aplicação
  </a>
</p>

<br />

## Descrição do Projeto

<p>
Trata-se de um quiz sobre o clássico Star Wars onde a aplicação consume uma <a href="https://swapi.dev/" target="_blank"><b>api REST do Star Wars</b><a/> para busca dos personagens, lista esses personagens disponibilizando um campo para o usuário digitar o nome de cada um e ao final de 2 minutos contabiliza a quantidade de pontos de acordo com os acertos.<br /><br />
As imagens foram extraídas desse <a href="https://starwars-visualguide.com/#/characters?page=1" target="_blank">guia visual</a>.
</p>

## ✅ Features

- [x] Busca e exibição de dados dos personagens do Star Wars;
- [x] Contador regressivo para controle de tempo do jogo;
- [x] Modal de ajuda com informações adicionais de cada personagem;
- [x] Conatbilização de pontos.

## 🛠 Tecnologias

As principais ferramentas utilizadas para a construção do projeto foram:

- [React](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)

## 🚧 Estrutura Geral do Projeto

### `assets`

Contém os arquivos estáticos do projeto como imagens e fontes.

### `core`

Contém definições referentes à api e ao tema.

### `modules`

Contém os módulos(estilos, tipos, componentes) referentes as páginas da aplicação.

### `pages`

Contém as páginas da aplicação e componentes inerentes ao Next.js.

### `shared`

A pasta shared contém itens(componentes, itens de tipagem) que são compartilhados na aplicação. Os itens declarados nessa pasta são independentes e tecnicamente podem ser utilizados em qualquer local do projeto.

### `styles`

A pasta styles contém definições inerentes aos estilos globais e componentes de UI pré-definidos.

### `templates`

A pasta templates contém os templates de layout/UI utilizados pelas páginas da aplicação. Esses templates funcionam como uma "moldura" para o conteúdo da página.

### `utilities`

A pasta utilities contém todo o código utilitário da aplicação, como funções genéricas, hoc, hooks, entre outros.

### `arquivos .types.ts`

Os arquivos .types.ts são arquivos que contém definições de tipos (interface ou type).

### `arquivos .styles.ts`

Os arquivos .styles.ts são arquivos que contém definições de estilo (styled-components).

### `arquivos .helpers.ts`

Os arquivos .helpers.ts são arquivos que contém valores e/ou funções auxiliares dentro do contexto em que o arquivo se encontra.

## Scripts para a execução

### Pré-requisitos

Antes de iniciar, é preciso ter o [Node.js](https://nodejs.org/en/) versão 14 ou superior instalado na máquina e algum gerenciador de pacotes, como [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/). Recomendo o [VSCode](https://code.visualstudio.com/) como editor para trabalhar com o código.

### Iniciando

Primeiro, instale as dependências do projeto:

```bash
npm install
# or
yarn
```

Em seguida rode o server de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no browser para ver a aplicação rodando.

## Autor

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62071446?s=400&u=851a0c918e6257a6cf47ebdcafa271e67f4503fc&v=4" width="100px;" alt=""/>
<b>Bruno Navarro de Oliveira</b></sub>

[![Linkedin Badge](https://img.shields.io/badge/-Bruno-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruno-navarro-oliveira/)](https://www.linkedin.com/in/bruno-navarro-oliveira/)

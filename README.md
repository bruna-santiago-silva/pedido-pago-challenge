# Pedido Pago Challenge

Construção de uma aplicação front-end usando NextJS que apresenta:\
uma tela de listagem de agentes e cargos - Home\
uma tela de detalhes de um agente - /agents/:id\
uma tela de detalhes de um cargo - /roles/:id\
A aplicação seguiu o layout apresentado no [figma](https://www.figma.com/file/yUwchJAe2BcgmmBp6Qi3Ld/Tela-de-Colaboradores---Desafio-Front-end?node-id=1167%3A11518)\


## Responsividade/Mobile

A aplicação possui duas versões para serem testadas:\
Desktop responsivo - para telas com mais de 500px de largura\
Mobile - para celulares com telas de até 500px de largura\
É possível testar a versão mobile no computador utilizando a ferramenta de desenvolvimento dos navegadores (apertando a tecla F12).

## Tecnologias utilizadas

NextJS\
Typescript\
ContextAPI\
Axios\
React Hooks\
Styled components\
Material Ui\

### Rodando o projeto localmente

Clone o projeto com o comando `git clone`;\
Para instalar as dependências utilize `yarn install` ou `npm install`;\
Inicialize a aplicação com `yarn dev`;

### Features

**Home desktop**\

Aba de seleção de dados a serem exibidos (Agentes ou Cargos)\
Campo de busca (funcional) - filtra os dados pelo nome do agente/cargo.\
Ao clicar em um agente/cargo (linha da tabela) você é direcionado para a página de detalhes desse item (porém a API retorna os dados mockados sempre do mesmo agente/cargo).\
Ao clicar no ícone de três pontos, um modal é aberto e você tem a opção de visualizar o detalhe do agente/cargo ou excluí-lo (a exclusão é feita apenas no front).\
Paginação (funcional) - é possível escolher quantos agentes são mostrados por página (3, 5, 10) e navegar pelas páginas.\

**Home mobile**\

Botão de seleção de dados a serem exibidos (Agentes ou Cargos)\
Campo de busca (funcional) - filtra os dados pelo nome do agente/cargo.\
Ao clicar no ícone de seta o card de agente/cargo é expandido para exibir mais informações.\
Ao clicar no botão de ações, um modal é aberto e você tem a opção de navegar para a página de detalhe do agente/cargo (porém a API retorna os dados mockados sempre do mesmo agente/cargo) ou excluí-lo (a exclusão é feita apenas no front).\

**Página de detalhes do cargo**\

Lista as permissões (leitura, escrita, exclusão) para cada cargo.\

**Página de detalhes do colaborador**\

Lista informações pessoais (documento, telefone, data de nascimento) e dados organizacionais do colaborador.\
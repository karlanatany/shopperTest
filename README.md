## Aplicação desenvolvida para avaliação técnica para vaga frontend na Shopper.

**Features:**

 - Cadastro de pedidos com nome de usuário, data de retirada e lista de compras;
- Adição e/ou remoção de produtos do carrinho;
- Atualização do valor total do carrinho de acordo com as ações;
- Persistência dos dados no banco de dados sql;
- Atualização do estoque;

**Tecnologias:**
- React js
- Chackra UI
- Styled Components
- sql
- node.js

**Pré-requisitos:**
Ter instalado na máquina o mysql, node.js e git.
 ________________________
**RODANDO O BACKEND:**
Clone o repositório, disponibilizado para construção deste projeto Front-End:

    $ git clone https://github.com/karlanatany/shopperTest.git

Acesse a pasta do projeto no terminal/cmd:

    $ cd shopperApp
    $ cd backend

Acesse o projeto via VSCode:

    $ code .

Ainda no terminal vamos criar o DATABASE para inserir nossas tabelas, para isto dê o seguinte comando:

    $ sudo mysql
    $ CREATE DATABASE shopper;
 
No terminal do Vs Code, instale as dependências do backend:

    $ npm install

Crie as tabelas:

    $ npm run migrations
   
 Crie um novo arquivo ***.env*** para inserir as informações referente à conexão ao banco de dados, temos um arquivo ***.env-example*** que pode ser usado como base para estas configurações.

Execute o script start:

    $ npm start

O servidor iniciará na porta: 3030.
___
**RODANDO O FRONTEND:**
Acesse a pasta do projeto no terminal/cmd:

    $ cd shopperApp
    $ cd backend

Acesse o projeto via VSCode:

    $ code .

Instale as dependências:

    $ npm install
Starte o projeto:

    $ npm start


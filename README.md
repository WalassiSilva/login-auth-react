# 🔐 Auth Login React

## 🔍 Sobre o Projeto

O **Auth Login React** é um projeto de código aberto projetado fazer login, testar antenticação e autorização entre rotas públicas e privadas.

## Estrutura do projeto

**Register page:** Cadastra um usuário com o fonecimento de nome, email, senha e confirmação de senha.

**Login page:** Confere email e senha para liberar acesso às rotas privadas do projeto. <br/>

**Dashboard page:** Recebo usuário autenticado com boas vindas.

**Validação:** Validação de formulário com Zod + react-hook-form.

**Armazenamento de usuários:** Usuários registrados e logados são salvos no local storage.

**Alternar temas:** Escolha de tema (claro ou escuro) salvo no local storage.

**Experiência do usuário:** Animaçãoes e transações para melhorar a experiência do usuário.

## 🛠️ Tecnologias e Ferramentas Utilizadas

<div align='center'>
  <img align='center' height='50' width='70' title='TypeScript' alt='React' src='https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg' /> &nbsp;
    &nbsp;
   <img align='center' height='50' width='68' title='Tailwindcss' alt='tailwindcss' src='https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-original.svg' /> &nbsp;
    &nbsp;
     <img align='center' height='50' width='70' title='TypeScript' alt='Vite' src='https://github.com/devicons/devicon/blob/master/icons/vitejs/vitejs-original.svg' /> &nbsp;
    &nbsp;
     <img align='center' height='50' width='70' title='TypeScript' alt='typescript' src='https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg' /> &nbsp;
    &nbsp;
   
   
  
</div>

## 🐳 Docker

Com a adição do Docker, você agora pode utilizar dos scripts fornecidos em `package.json` para poder construir a imagem docker e rodar o container da aplicação.

Para isso, segue a lista de funções de cada script:

> `docker compose up -d --build`: Iniciar o projeto com docker <br>

## Configuração do projeto

```sh
npm install
```

### Compilar e recarregar rapidamente para Front-end

```sh
npm run dev
```

## Possíveis Melhorias
- Transformar a senha em um hash code.
- Adicionar novos temas
- Incrementar a DashboardPage com mais informações para cativar os usuários

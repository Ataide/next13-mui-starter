Sim... Mais uma receita de dprojeto usando [Next.js](https://nextjs.org/) com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Features

- Authenticação com firebase.
- Prisma ORM - PostgreSQL.
- Tailwind CSS - MUI Material Design.

### Banco de dados.

Primeiramente existe um arquivo .yml para ser usado com o docker compose onde cria e inicializa um banco de dados local POSTGRES. Em `lab/dockers/postgres` está o arquivo de configuração. Dê uma olhada e vera o que precisa saber.

```yml
version: '3.5'

services:
  postgres:
    container_name: postgres_local
    image: postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 1234
      PGDATA: /data/postgres
    volumes:
       - postgres-db:/data/postgres
    ports:
      - "5434:5432"


volumes:
  postgres-db:
    driver: local

```

Note que a porta local do postgress padrão é 5432 e estou mapeando para a porta 5434 pois tenho outras instancias de potsgres por aqui. Caso haja a necessidade mude isso de acordo com a necessidade.


Imaginando que o docker-compose já esteja corretamente instalado na sua build, para criar e instanciar o container com o postgres basta usar o comando: 

```bash
docker-compose -d up
```

Depois de iniciado, precisamos criar as estruturas do banco de dados. Para isso, utilize o comando:

```bash
yarn prisma db push
```
Logo em seguida precisamos criar nosso primeiro usuario
Que será: 

email: 'dev@ibase.com',
senha: 'senhaDev'
name: 'Usuario Desenvolvedor'

```bash
yarn prisma db seed
```
 Pronto. Se tudo ocorrer bem estamos pronto pra utilizar o sistema.

 Dentro da pasta principal:

 ```bash
  yarn prisma dev 
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

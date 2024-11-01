

# graphql dog breed api example



# Installation

install dependencies:

```bash
npm install
```

# Environment

setup the .env file at the root of the project, and add port and database uri:

```bash
NODE_ENV=developemnt
PORT=
MONGO=
```


# Tests
setup the .env.test file at the root of the project, and add port and database uri:

```bash
NODE_ENV=test
PORT=
MONGO=
```

with jest and supertest:

```bash
npm run test
```


# Development

install dependencies:

```bash
npm run dev
```

# graphql

query : getAllBreeds

<p align="center">
  <img src=".git/list.png" alt="list">
</p>

query : getBreed

<p align="center">
  <img src=".git/item.png" alt="item">
</p>

query : mutation createBreed

<p align="center">
  <img src=".git/create.png" alt="item">
</p>

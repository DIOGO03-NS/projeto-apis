# 🚀 Microsserviços: Análise de Texto com Node.js e Python

Um projeto prático que implementa uma arquitetura de microsserviços para análise de texto, demonstrando a comunicação entre uma API Gateway em Node.js e um serviço especialista em Python, tudo orquestrado com Docker.

## 🎯 Sobre o Projeto

Este projeto foi criado com o objetivo de simular um ambiente de microsserviços real, onde diferentes responsabilidades são segregadas em serviços independentes. A aplicação permite que um usuário envie um texto para um endpoint, que por sua vez, utiliza um serviço interno para processar e retornar uma análise simples desse texto.

A arquitetura é composta por:

* **API Gateway (Node.js/Express):** A porta de entrada do sistema. Responsável por receber as requisições do cliente, validar os dados e se comunicar com os serviços internos.
* **API de Análise (Python/Flask):** O serviço "worker". Recebe o texto do Gateway, executa a lógica de negócio (neste caso, contar palavras e caracteres) e retorna o resultado.

## 🏛️ Arquitetura do Sistema

O fluxo de dados é simples e desacoplado, seguindo as melhores práticas de microsserviços:

    A[👨‍💻 Usuário] -->|1. Requisição POST com texto| B(API Gateway | Node.js);
    B -->|2. Chamada interna| C(API de Análise | Python);
    C -->|3. Retorna análise JSON| B;
    B -->|4. Retorna resposta final| A;

## 🛠️ Tecnologias Utilizadas

As seguintes ferramentas e tecnologias foram usadas na construção do projeto:

| Componente | Tecnologia |
| :--- | :--- |
| **Gateway** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) |
| **Análise** | ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) |
| **Container** | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) |
| **Orquestração**| ![Docker Compose](https://img.shields.io/badge/Docker%20Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white) |

## 🔧 Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:

* **Docker**
* **Docker Compose** (geralmente já vem com o Docker Desktop)

## ⚙️ Instalação e Execução

Siga os passos abaixo para executar o projeto localmente:

1.  Clone este repositório:
    ```bash
    git clone https://github.com/DIOGO03-NS/projeto-apis.git
    ```

2.  Acesse a pasta do projeto:
    ```bash
    cd projeto-apis
    ```

3.  Construa e inicie os contêineres com Docker Compose:
    ```bash
    docker-compose up --build
    ```
    O comando `--build` garante que as imagens Docker serão construídas do zero.

Pronto! As duas APIs já estão rodando e se comunicando. A API Gateway estará disponível em `http://localhost:3000`.

## ▶️ Como Usar

Para testar a integração, envie uma requisição `POST` para o endpoint da API Gateway com um JSON contendo o texto a ser analisado. Você pode usar ferramentas como Postman, Insomnia ou simplesmente o `curl` no seu terminal.

Exemplo com cURL:
```bash
curl -X POST http://localhost:3000/process-text \
-H "Content-Type: application/json" \
-d '{"text": "Olá mundo! Este é um teste de integração de APIs."}'
```

Resposta esperada (JSON):
```json
{
  "text_received": "Olá mundo! Este é um teste de integração de APIs.",
  "analysis": {
    "word_count": 9,
    "character_count": 52
  }
}
```

## 📝 API Endpoints

A única rota exposta publicamente é a da API Gateway:

| Método HTTP | Endpoint | Descrição | Corpo (Body) de Exemplo |
| :--- | :--- | :--- | :--- |
| `POST` | `/process-text` | Envia um texto para ser processado pela API interna. | `{"text": "Seu texto aqui."}` |

## 📂 Estrutura de Pastas

A estrutura do projeto foi organizada para manter os serviços independentes:

```
.
├── api-gateway-js/         # Microsserviço de Gateway (Node.js)
│   ├── index.js            # Lógica principal da API
│   ├── package.json        # Dependências do Node.js
│   └── Dockerfile          # Instruções para containerizar a API
│
├── api-analyzer-py/        # Microsserviço de Análise (Python)
│   ├── app.py              # Lógica principal da API
│   ├── requirements.txt    # Dependências do Python
│   └── Dockerfile          # Instruções para containerizar a API
│
├── docker-compose.yml      # Arquivo de orquestração dos contêineres
└── README.md               # Este arquivo
```

## 🚀 Próximos Passos

Este projeto é um ponto de partida. Aqui estão algumas ideias para evoluí-lo:

- [ ] **Análise de Sentimentos:** Implementar uma análise de sentimento (positivo, negativo, neutro) na API de Python usando bibliotecas como `TextBlob` ou `NLTK`.
- [ ] **Banco de Dados:** Conectar a API Gateway a um banco de dados (ex: PostgreSQL com Sequelize) para salvar um histórico das análises.
- [ ] **Testes Unitários:** Adicionar testes unitários para ambas as APIs para garantir a qualidade e a estabilidade do código.
- [ ] **Tratamento de Erros:** Melhorar o tratamento de erros e a comunicação de status entre os serviços.
- [ ] **Frontend:** Criar uma interface web simples em React ou Vue.js para consumir a API de forma mais visual.

## 👨‍💻 Autor

Feito com ❤️ por Diogo
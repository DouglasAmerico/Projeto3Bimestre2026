# 🚀 Dashboard de Produtos - Projeto Prático (3º Bimestre)

> **Nota para os estudantes:** Este é um projeto simples criado especialmente para auxiliar e servir como material de apoio aos alunos do **3º Período de Tecnologia da CEI**. 🎓

---

## 📌 Sobre o Projeto

Este projeto consiste em uma aplicação web prática que demonstra a **integração entre um backend em PHP (construindo uma API RESTful simples com PDO/MySQL) e um frontend moderno com TypeScript e HTML5/CSS3**.

O objetivo principal é exemplificar de forma didática:
- Criação e disponibilização de dados em formato **JSON** usando PHP.
- Conexão e consultas a banco de dados relacional (MySQL/MariaDB) utilizando **PDO**.
- Requisições assíncronas (`fetch` API com `async/await`) no frontend.
- Tipagem estática de dados e boas práticas com **TypeScript**.
- Manipulação dinâmica do **DOM** para atualizar cards estatísticos e a tabela de produtos.

---

## 🛠️ Tecnologias Utilizadas

- **Backend:**
  - PHP 8+
  - PDO (PHP Data Objects)
  - MySQL / MariaDB
  - Servidor Web Apache (XAMPP)

- **Frontend:**
  - HTML5 & CSS3 (Design moderno com fonte Inter do Google Fonts)
  - TypeScript (Tipagem de dados e manipulação do DOM)

---

## 📂 Estrutura de Arquivos

```text
Projeto3Bimestre2026/
├── api.php                  # Endpoint PHP que busca os dados no MySQL e retorna JSON
├── config.php               # Configuração de conexão PDO com o Banco de Dados
├── index.html               # Interface principal da aplicação (Dashboard)
├── projeto3bimestre2026.sql.gz # Dump compactado do banco de dados (MySQL)
├── tsconfig.json            # Configurações do compilador TypeScript
├── dist/                    # Arquivos JavaScript compilados a partir do TypeScript
│   └── app.js               # Script compilado executado no navegador
└── src/                     # Código-fonte do Frontend
    ├── app.ts               # Lógica principal (Fetch API, estatísticas e renderização)
    ├── types.ts             # Definições de tipos do TypeScript (Interface/Type Produto)
    └── css/
        └── style.css        # Estilização CSS do Dashboard
```

---

## 💻 Pré-requisitos

Para rodar este projeto em sua máquina local, você precisará de:

1. **XAMPP** (ou outro servidor local Apache + MySQL) com PHP 8.x.
2. **Node.js** e **TypeScript** (necessário apenas se for alterar o código TypeScript na pasta `src/`).

---

## 🚀 Como Executar o Projeto

### 1. Clonar ou Copiar o Projeto
Certifique-se de salvar os arquivos da aplicação na pasta `htdocs` do seu XAMPP:
```text
C:\xampp\htdocs\Projeto3Bimestre2026
```

### 2. Configurar e Importar o Banco de Dados (MySQL)

O projeto disponibiliza um dump completo do banco de dados no arquivo **`projeto3bimestre2026.sql.gz`**, localizado na **raiz do repositório**.

1. Abra o **XAMPP Control Panel** e inicie os módulos **Apache** e **MySQL**.
2. Escolha uma das opções a seguir para importar o banco de dados no seu ambiente:

---

#### 🟢 Opção A: Importação via **phpMyAdmin**

1. Acesse o phpMyAdmin em seu navegador: `http://localhost/phpmyadmin`.
2. No menu lateral esquerdo, clique em **Novo** (New) e crie um banco de dados com o nome:
   ```text
   projeto3bimestre2026
   ```
3. Clique no banco de dados `projeto3bimestre2026` recém-criado para selecioná-lo.
4. No menu superior, acesse a aba **Importar** (Import).
5. No campo **Escolher arquivo** (Choose File), selecione o arquivo **`projeto3bimestre2026.sql.gz`** da raiz do projeto.
   > 💡 *O phpMyAdmin suporta a importação do arquivo `.sql.gz` compactado diretamente.*
6. Role até o final da página e clique no botão **Importar** (Executar / Go).

---

#### 🔷 Opção B: Importação via **DBeaver**

1. Abra o **DBeaver** e conecte-se ao seu servidor MySQL/MariaDB local.
2. No painel **Navegador de Banco de Dados** (Database Navigator), clique com o botão direito na conexão MySQL e crie o banco de dados `projeto3bimestre2026` (caso ainda não exista).
3. Importe o dump usando uma das alternativas:
   - **Forma 1 (Executar Script SQL):**
     1. Descompacte o arquivo `projeto3bimestre2026.sql.gz` (usando 7-Zip, WinRAR ou similar) para obter o arquivo `projeto3bimestre2026.sql`.
     2. No DBeaver, selecione o banco `projeto3bimestre2026` e vá no menu **Ficheiro/Arquivo ➡️ Abrir arquivo...** (ou pressione `Ctrl + O`).
     3. Abra o arquivo `projeto3bimestre2026.sql`.
     4. Pressione **`Alt + X`** (ou clique no ícone *Executar Script SQL*) para rodar o script completo.
   - **Forma 2 (Menu Ferramentas):**
     1. Clique com o botão direito sobre o banco `projeto3bimestre2026`.
     2. Acesse **Ferramentas (Tools)** ➡️ **Restaurar banco de dados (Restore database)** ou **Executar script SQL**.
     3. Selecione o arquivo do dump e clique em **Iniciar (Start)**.

---

3. Caso as credenciais do seu MySQL local sejam diferentes do padrão (`root` sem senha), atualize o arquivo [config.php](file:///c:/xampp/htdocs/Projeto3Bimestre2026/config.php):
   ```php
   $host   = "localhost";
   $dbname = "projeto3bimestre2026";
   $user   = "root";
   $pass   = "";
   ```

### 3. Compilar o TypeScript (Opcional para alterações)
Caso você faça alterações nos arquivos dentro da pasta `src/`, precisará recompilar o código TypeScript:

```bash
# Compilar uma vez (gera/atualiza dist/app.js)
npx tsc

# Ou rodar no modo de monitoramento (compila automaticamente ao salvar)
npx tsc -w
```

### 4. Acesse a Aplicação
Com o Apache rodando no XAMPP, abra o navegador e acesse:
```text
http://localhost/Projeto3Bimestre2026/
```

---

## 📚 Conceitos Aprendidos no 3º Período

- **Headers no PHP:** Configuração de respostas `application/json` e permissão de acesso (CORS).
- **Consultas SQL com `INNER JOIN`:** Relacionamento entre as tabelas `produto`, `subcategoria` e `categoria`.
- **Requisições Assíncronas (`fetch`):** Consumo de APIs REST no frontend sem recarregar a página.
- **Métodos Funcionais de Array (`reduce`):** Agregação e acúmulo de dados no frontend (cálculo de soma de preços/média e identificação do produto com maior estoque).
- **Tipagem com TypeScript:** Declaração do `type Produto` para garantir previsibilidade e auto-completar no editor.
- **Tratamento de Erros:** Estruturas `try...catch` tanto no backend (PDOExceptions) quanto no frontend (Network errors).

---

## 🤝 Mensagem aos Alunos

Este repositório foi construído como um guia prático para auxiliar nos estudos do **3º Período da CEI**. Explore o código, faça testes, faça modificações e tire suas dúvidas! 🚀

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
├── api.php              # Endpoint PHP que busca os dados no MySQL e retorna JSON
├── config.php           # Configuração de conexão PDO com o Banco de Dados
├── index.html           # Interface principal da aplicação (Dashboard)
├── tsconfig.json        # Configurações do compilador TypeScript
├── dist/                # Arquivos JavaScript compilados a partir do TypeScript
│   └── app.js           # Script compilado executado no navegador
└── src/                 # Código-fonte do Frontend
    ├── app.ts           # Lógica principal (Fetch API, estatísticas e renderização)
    ├── types.ts         # Definições de tipos do TypeScript (Interface/Type Produto)
    └── css/
        └── style.css    # Estilização CSS do Dashboard
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

### 2. Configurar o Banco de Dados (MySQL)
1. Abra o **XAMPP Control Panel** e inicie os módulos **Apache** e **MySQL**.
2. Acesse o phpMyAdmin em `http://localhost/phpmyadmin`.
3. Crie um banco de dados chamado `projeto3bimestre2026`.
4. Crie as tabelas de `categoria`, `subcategoria` e `produto` e insira registros para teste.
5. Caso as credenciais do seu banco de dados sejam diferentes do padrão (`root` sem senha), atualize o arquivo [config.php](file:///c:/xampp/htdocs/Projeto3Bimestre2026/config.php):
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
- **Tipagem com TypeScript:** Declaração do `type Produto` para garantir previsibilidade e auto-completar no editor.
- **Tratamento de Erros:** Estruturas `try...catch` tanto no backend (PDOExceptions) quanto no frontend (Network errors).

---

## 🤝 Mensagem aos Alunos

Este repositório foi construído como um guia prático para auxiliar nos estudos do **3º Período da CEI**. Explore o código, faça testes, faça modificações e tire suas dúvidas! 🚀

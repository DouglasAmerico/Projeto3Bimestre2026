// ====================================================================
// PASSO 1: FUNÇÃO PARA BUSCAR OS DADOS DO SERVIDOR (API PHP)
// ====================================================================
async function carregarDashboard(): Promise<void> {
    try {
        // Faz a requisição HTTP GET para o arquivo api.php
        const resposta = await fetch('api.php');

        // Se o servidor retornar um erro (ex: status 404 ou 500)
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: Status ${resposta.status}`);
        }

        // Converte a resposta recebida em um array de objetos do tipo Produto
        const produtos: Produto[] = await resposta.json();

        // Atualiza a tela enviando os produtos para os Cards e para a Tabela
        atualizarCards(produtos);
        exibirTabela(produtos);

    } catch (erro) {
        console.error('Falha ao carregar produtos:', erro);
        alert('Erro ao carregar os dados da API PHP. Verifique o console.');
    }
}

// ====================================================================
// PASSO 2: FUNÇÃO PARA CALCULAR AS ESTATÍSTICAS E ATUALIZAR OS CARDS
// ====================================================================
function atualizarCards(produtos: Produto[]): void {
    // Se a lista estiver vazia, encerra a função
    if (produtos.length === 0) return;

    // --- 1. TOTAL DE PRODUTOS (Quantidade em número) ---
    const totalProdutos: number = produtos.length;

    // --- 2. MÉDIA DE PREÇO DOS PRODUTOS ---
    // Utilizando o método reduce() para somar o preço de todos os produtos do array
    const somaPrecos: number = produtos.reduce((acumulador, item) => {
        return acumulador + Number(item.preco);
    }, 0);
    const mediaPreco: number = somaPrecos / totalProdutos;

    // --- 3. PRODUTO COM MAIOR ESTOQUE ---
    // Utilizando o método reduce() para comparar os estoques e retornar o produto com maior quantidade
    const produtoMaiorEstoque: Produto = produtos.reduce((maior, item) => {
        return Number(item.estoque) > Number(maior.estoque) ? item : maior;
    }, produtos[0]);

    // --- ATUALIZAÇÃO DO HTML (DOM) ---

    // Card 1: Quantidade total de produtos
    const elTotal = document.getElementById('card-total-produtos');
    if (elTotal) {
        elTotal.innerText = totalProdutos.toString();
    }

    // Card 2: Média de preço formatada em Reais (R$)
    const elMedia = document.getElementById('card-media-preco');
    if (elMedia) {
        elMedia.innerText = formatarMoeda(mediaPreco);
    }

    // Card 3: Nome do produto e a quantidade em estoque
    const elMaiorEstoque = document.getElementById('card-maior-estoque');
    if (elMaiorEstoque) {
        elMaiorEstoque.innerText = `${produtoMaiorEstoque.produto} (${produtoMaiorEstoque.estoque} un.)`;
    }
}

// ====================================================================
// PASSO 3: FUNÇÃO PARA PREENCHER A TABELA DE PRODUTOS NO HTML
// ====================================================================
function exibirTabela(produtos: Produto[]): void {
    const tbody = document.getElementById('tabela-produtos-body');
    if (!tbody) return;

    // Limpa a tabela para não duplicar linhas
    tbody.innerHTML = '';

    // Se não houver produtos, exibe uma mensagem na tabela
    if (produtos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">Nenhum produto cadastrado.</td></tr>';
        return;
    }

    // Cria uma linha <tr> para cada produto recebido
    produtos.forEach((item) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>#${item.produto_id}</td>
            <td><strong>${item.produto}</strong></td>
            <td>${item.categoria}</td>
            <td>${formatarMoeda(Number(item.preco))}</td>
            <td>${item.estoque} un.</td>
        `;

        tbody.appendChild(tr);
    });
}

// ====================================================================
// FUNÇÃO AUXILIAR: FORMATAR NÚMERO PARA MOEDA (R$)
// ====================================================================
function formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// ====================================================================
// EVENTO: EXECUTA O CÓDIGO ASSIM QUE O HTML TERMINAR DE CARREGAR
// ====================================================================
document.addEventListener('DOMContentLoaded', () => {
    carregarDashboard();
});
<?php

// Define que a resposta será do tipo JSON e aceita requisições de outras origens (CORS)
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");

require_once 'config.php';

try {
    // 1. Escreva sua instrução SQL (exemplo: buscando da tabela 'usuarios')
    $sql = "SELECT 
                p.id AS produto_id,
                p.nome AS produto,
                p.preco,
                p.estoque,
                s.nome AS subcategoria,
                c.nome AS categoria
            FROM produto p
            INNER JOIN subcategoria s ON p.subcategoria_id = s.id
            INNER JOIN categoria c ON s.categoria_id = c.id
            WHERE p.ativo = TRUE
            ORDER BY c.nome ASC, s.nome ASC, p.nome ASC";
    
    // 2. Prepara a consulta
    $stmt = $pdo->prepare($sql);
    
    // 3. Executa a consulta
    $stmt->execute();
    
    // 4. Busca todos os resultados
    $dados = $stmt->fetchAll();
    
    // 5. Retorna o status HTTP 200 (OK) e exporta os dados formatados em JSON
    http_response_code(200);
    echo json_encode($dados, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    // Em caso de erro na consulta SQL
    http_response_code(500);
    echo json_encode(["error" => "Erro ao executar consulta no banco de dados"]);
}
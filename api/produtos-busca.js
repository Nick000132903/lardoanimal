// api/produtos-busca.js
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { busca, badge, categoria, min, max, pagina = 1, limite = 12 } = req.query;
  
  try {
    // Construir a query dinamicamente com todos os filtros
    let whereClauses = [];
    let params = [];
    let paramIndex = 1;

    // Filtro por busca (nome)
    if (busca) {
      whereClauses.push(`nome ILIKE $${paramIndex}`);
      params.push(`%${busca}%`);
      paramIndex++;
    }

    // Filtro por badge
    if (badge && badge !== 'todos') {
      whereClauses.push(`badge = $${paramIndex}`);
      params.push(badge);
      paramIndex++;
    }

    // Filtro por categoria
    if (categoria && categoria !== 'todos') {
      whereClauses.push(`LOWER(categoria) = LOWER($${paramIndex})`);
      params.push(categoria);
      paramIndex++;
    }

    // Filtro por preço
    if (min && max) {
      whereClauses.push(`CAST(REPLACE(REPLACE(preco, 'R$ ', ''), ',', '.') AS DECIMAL(10,2)) BETWEEN $${paramIndex} AND $${paramIndex + 1}`);
      params.push(parseFloat(min));
      params.push(parseFloat(max));
      paramIndex += 2;
    }

    // Montar a query completa
    let query = 'SELECT * FROM produtos';
    if (whereClauses.length > 0) {
      query += ' WHERE ' + whereClauses.join(' AND ');
    }
    query += ' ORDER BY id';

    // Paginação
    const offset = (parseInt(pagina) - 1) * parseInt(limite);
    query += ` LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    params.push(parseInt(limite));
    params.push(offset);

    // Executar a query
    const produtos = await sql(query, params);
    
    // Retornar no formato esperado pelo frontend
    res.status(200).json({ 
      success: true, 
      produtos: produtos 
    });
    
  } catch (error) {
    console.error('Erro na busca:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erro na busca de produtos',
      details: error.message 
    });
  }
}
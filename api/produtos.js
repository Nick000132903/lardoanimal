// api/produtos.js
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { destaque, categoria, limite = 100, busca, badge, min, max } = req.query;
  
  try {
    let query = sql`
      SELECT * FROM produtos 
      WHERE 1=1
    `;
    
    // Filtrar por destaque
    if (destaque === 'true') {
      query = sql`
        SELECT * FROM produtos 
        WHERE destaque = true 
        ORDER BY id 
        LIMIT ${parseInt(limite)}
      `;
    }
    // Filtrar por categoria
    else if (categoria && categoria !== 'todos') {
      query = sql`
        SELECT * FROM produtos 
        WHERE LOWER(categoria) = LOWER(${categoria})
        ORDER BY id 
        LIMIT ${parseInt(limite)}
      `;
    }
    // Filtrar por badge
    else if (badge && badge !== 'todos') {
      query = sql`
        SELECT * FROM produtos 
        WHERE badge = ${badge}
        ORDER BY id 
        LIMIT ${parseInt(limite)}
      `;
    }
    // Busca por nome
    else if (busca) {
      query = sql`
        SELECT * FROM produtos 
        WHERE nome ILIKE ${'%' + busca + '%'}
        ORDER BY id 
        LIMIT ${parseInt(limite)}
      `;
    }
    // Filtro por preço
    else if (min && max) {
      query = sql`
        SELECT * FROM produtos 
        WHERE CAST(REPLACE(REPLACE(preco, 'R$ ', ''), ',', '.') AS DECIMAL(10,2)) 
        BETWEEN ${parseFloat(min)} AND ${parseFloat(max)}
        ORDER BY id 
        LIMIT ${parseInt(limite)}
      `;
    }
    // Todos os produtos
    else {
      query = sql`
        SELECT * FROM produtos 
        ORDER BY id 
        LIMIT ${parseInt(limite)}
      `;
    }
    
    const produtos = await query;
    
    // Retornar no formato esperado pelo frontend
    res.status(200).json({ 
      success: true, 
      produtos: produtos 
    });
    
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erro ao carregar produtos',
      details: error.message 
    });
  }
}
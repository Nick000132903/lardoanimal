// api/produtos-destaque.js
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    const produtos = await sql`
      SELECT * FROM produtos 
      WHERE destaque = true 
      ORDER BY id 
      LIMIT 6
    `;
    
    // Retornar no formato esperado pelo frontend
    res.status(200).json({ 
      success: true, 
      produtos: produtos 
    });
    
  } catch (error) {
    console.error('Erro ao buscar produtos em destaque:', error);
    res.status(500).json({ 
      success: false,
      error: 'Erro ao carregar produtos em destaque' 
    });
  }
}
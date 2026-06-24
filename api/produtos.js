import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    // Query simples e direta
    const sql = neon(process.env.DATABASE_URL);
    const produtos = await sql`SELECT * FROM produtos ORDER BY id`;
    
    res.status(200).json({ 
      success: true, 
      produtos: produtos 
    });
  } catch (error) {
    console.error('Erro detalhado:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      stack: error.stack 
    });
  }
}
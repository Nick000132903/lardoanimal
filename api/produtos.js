import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { rows } = await sql`
      SELECT
        id,
        nome,
        descricao,
        preco,
        img,
        link,
        badge,
        categorias
      FROM produtos
      ORDER BY id DESC
    `;

    return res.status(200).json({
      success: true,
      produtos: rows
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({
      success: false,
      error: 'Erro ao buscar produtos'
    });
  }
}

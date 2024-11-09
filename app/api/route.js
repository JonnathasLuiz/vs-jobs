// pages/api/nomeDaApi.js
import connectToDatabase from '../../lib/mongodb';

//import NextResponse from 'next/server';

export async function GET() {
  const db = await connectToDatabase();

  // Sua lógica para manipular os dados
  return Response.json({message:'Teste', status: 200})
}
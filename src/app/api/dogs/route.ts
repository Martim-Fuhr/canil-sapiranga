import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const dogs = await prisma.dogs.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(dogs);
  } catch (error) {
    console.error('Erro ao buscar dogs:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, age, stature, pelage, details, slug, imageUrl } = body;

    // Validações básicas
    if (!name || !age || !stature || !pelage || !slug || !imageUrl) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não fornecidos' },
        { status: 400 }
      );
    }

    const dog = await prisma.dogs.create({
      data: {
        name,
        age: parseInt(age),
        stature,
        pelage,
        details,
        slug,
        imageUrl
      }
    });

    return NextResponse.json(dog, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar dog:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

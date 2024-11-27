import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

// Configuração do Supabase com mais detalhes de configuração
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { userId, score, category } = await request.json();

    console.log("Dados recebidos:", { userId, score, category });

    // Validação dos dados
    if (!userId || score === undefined || !category) {
      console.error("Dados incompletos:", { userId, score, category });
      return NextResponse.json(
        {
          error: "Dados incompletos",
          details: { userId, score, category },
        },
        { status: 400 }
      );
    }

    try {
      const { data, error } = await supabase
        .from("leadership.results")
        .insert({
          user_id: userId,
          score: score,
          category: category,
          created_at: new Date().toISOString(),
        })
        .select(); // Adicionando .select() para obter mais informações

      console.log("Resultado do insert:", { data, error });

      if (error) {
        console.error(
          "Erro detalhado do Supabase:",
          JSON.stringify(error, null, 2)
        );
        return NextResponse.json(
          {
            error: "Erro ao salvar resultado",
            details: error,
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          message: "Resultado salvo com sucesso",
          data,
        },
        { status: 200 }
      );
    } catch (supabaseError) {
      console.error("Erro de execução do Supabase:", supabaseError);
      return NextResponse.json(
        {
          error: "Erro na execução do Supabase",
          details: supabaseError,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Erro inesperado:", error);
    return NextResponse.json(
      {
        error: "Erro interno do servidor",
        details: error,
      },
      { status: 500 }
    );
  }
}

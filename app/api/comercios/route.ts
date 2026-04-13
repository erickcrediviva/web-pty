import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const categoria = searchParams.get('categoria')
  const ciudad = searchParams.get('ciudad')

  // Fetch active comercios
  let query = supabase
    .from('comercios')
    .select(`
      comercio,
      active,
      categoria,
      destacado,
      logo_url,
      banner_url,
      ecommerce_active,
      ecommerce_url,
      is_zero_interest,
      legal_name,
      sucursales (
        id,
        sucursal,
        activa,
        ciudad,
        direccion
      )
    `)
    .eq('active', true)
    .order('destacado', { ascending: false })
    .order('comercio', { ascending: true })

  if (categoria && categoria !== 'todos') {
    query = query.eq('categoria', categoria)
  }

  const { data: comercios, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Filter by ciudad at the sucursales level if requested
  let result = comercios || []

  if (ciudad && ciudad !== 'todas') {
    result = result.filter((c) => {
      const suc = c.sucursales as { ciudad: string | null; activa: boolean | null }[]
      return suc?.some((s) => s.activa && s.ciudad === ciudad)
    })
  }

  // Get unique cities for filter
  const ciudades = Array.from(
    new Set(
      result
        .flatMap((c) => {
          const suc = c.sucursales as { ciudad: string | null; activa: boolean | null }[]
          return suc?.filter((s) => s.activa).map((s) => s.ciudad) || []
        })
        .filter(Boolean)
    )
  ).sort()

  // Get unique categorias
  const categorias = Array.from(
    new Set(result.map((c) => c.categoria).filter(Boolean))
  ).sort()

  return NextResponse.json({ comercios: result, ciudades, categorias })
}

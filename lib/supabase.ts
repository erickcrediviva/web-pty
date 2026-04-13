import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Comercio = {
  comercio: string
  active: boolean
  categoria: string | null
  destacado: boolean | null
  logo_url: string | null
  banner_url: string | null
  ecommerce_active: boolean | null
  ecommerce_url: string | null
  is_zero_interest: boolean | null
  legal_name: string | null
  sucursales?: Sucursal[]
}

export type Sucursal = {
  id: number
  sucursal: string
  comercio: string
  activa: boolean | null
  ciudad: string | null
  direccion: string | null
}

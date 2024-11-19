declare module "@/utils/supabase/server" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function createClient(): Promise<any>; // ajuste o tipo conforme necessário
}

export type Users = {
  id: string
  name: string
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
  phone: string
  amount: number
}

export type Orders = {
  id: string
  order: string
  status: 'pending' | 'processing' | 'success' | 'failed'
  lastOrder: string
  method: string
  amount: number
}

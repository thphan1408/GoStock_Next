import { DataTable } from '@/components/data-table'
import { columnsOrders } from '../../../components/columns'
import { Orders } from '@/types'
import PageTitle from '@/components/page-title'

const data: Orders[] = [
  {
    id: '101',
    order: 'ORD-001',
    status: 'success',
    lastOrder: 'ORD-000',
    method: 'Credit Card',
    amount: 500,
  },
  {
    id: '102',
    order: 'ORD-002',
    status: 'processing',
    lastOrder: 'ORD-001',
    method: 'PayPal',
    amount: 750,
  },
  {
    id: '103',
    order: 'ORD-003',
    status: 'failed',
    lastOrder: 'ORD-002',
    method: 'Bank Transfer',
    amount: 250,
  },
  {
    id: '104',
    order: 'ORD-004',
    status: 'pending',
    lastOrder: 'ORD-003',
    method: 'Credit Card',
    amount: 1200,
  },
  {
    id: '105',
    order: 'ORD-005',
    status: 'success',
    lastOrder: 'ORD-004',
    method: 'PayPal',
    amount: 980,
  },
  {
    id: '106',
    order: 'ORD-006',
    status: 'failed',
    lastOrder: 'ORD-005',
    method: 'Bank Transfer',
    amount: 670,
  },
  {
    id: '107',
    order: 'ORD-007',
    status: 'processing',
    lastOrder: 'ORD-006',
    method: 'Credit Card',
    amount: 450,
  },
  {
    id: '108',
    order: 'ORD-008',
    status: 'pending',
    lastOrder: 'ORD-007',
    method: 'PayPal',
    amount: 300,
  },
  {
    id: '109',
    order: 'ORD-009',
    status: 'success',
    lastOrder: 'ORD-008',
    method: 'Bank Transfer',
    amount: 820,
  },
  {
    id: '110',
    order: 'ORD-010',
    status: 'processing',
    lastOrder: 'ORD-009',
    method: 'Credit Card',
    amount: 600,
  },
] as Orders[]

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columnsOrders} data={data} />
    </div>
  )
}

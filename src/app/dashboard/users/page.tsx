import { DataTable } from '@/components/data-table'
import { columnsUsers } from '../../../components/columns'
import { Users } from '@/types'
import PageTitle from '@/components/page-title'

const data: Users[] = [
  {
    id: '1',
    name: 'John Doe',
    status: 'success',
    email: 'johndoe@example.com',
    phone: '555-1234',
    amount: 500,
  },
  {
    id: '2',
    name: 'Jane Smith',
    status: 'processing',
    email: 'janesmith@example.com',
    phone: '555-5678',
    amount: 750,
  },
  {
    id: '3',
    name: 'Bob Johnson',
    status: 'failed',
    email: 'bobjohnson@example.com',
    phone: '555-8765',
    amount: 250,
  },
  {
    id: '4',
    name: 'Alice Davis',
    status: 'pending',
    email: 'alicedavis@example.com',
    phone: '555-3456',
    amount: 1200,
  },
  {
    id: '5',
    name: 'Charlie Brown',
    status: 'success',
    email: 'charliebrown@example.com',
    phone: '555-6543',
    amount: 980,
  },
  {
    id: '6',
    name: 'Emily Wilson',
    status: 'failed',
    email: 'emilywilson@example.com',
    phone: '555-4321',
    amount: 670,
  },
  {
    id: '7',
    name: 'David Miller',
    status: 'processing',
    email: 'davidmiller@example.com',
    phone: '555-9876',
    amount: 450,
  },
  {
    id: '8',
    name: 'Sophia Clark',
    status: 'pending',
    email: 'sophiaclark@example.com',
    phone: '555-6789',
    amount: 300,
  },
  {
    id: '9',
    name: 'Michael Lee',
    status: 'success',
    email: 'michaellee@example.com',
    phone: '555-8765',
    amount: 820,
  },
  {
    id: '10',
    name: 'Olivia Harris',
    status: 'processing',
    email: 'oliviaharris@example.com',
    phone: '555-2345',
    amount: 600,
  },
] as Users[]

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />
      <DataTable columns={columnsUsers} data={data} />
    </div>
  )
}

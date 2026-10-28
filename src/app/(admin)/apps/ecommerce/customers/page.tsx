import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import CustomerTable from './components/CustomerTable'

export const metadata: Metadata = { title: 'Customers' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Customers" subtitle="Ecommerce" />
      <div className="container">
        <CustomerTable />
      </div>
    </>
  )
}

export default Page

import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import AttributeTable from './components/AttributeTable'

export const metadata: Metadata = { title: 'Manage Attributes' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Manage Attributes" subtitle="Ecommerce" />
      <div className="container">
        <AttributeTable />
      </div>
    </>
  )
}

export default Page

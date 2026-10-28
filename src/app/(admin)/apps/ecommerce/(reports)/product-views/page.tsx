import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import ProductViewsTable from './components/ProductViewsTable'

export const metadata: Metadata = { title: 'Product Views' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Product Views" subtitle="Ecommerce" />
      <div className="container">
        <ProductViewsTable />
      </div>
    </>
  )
}

export default Page

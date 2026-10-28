import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import Table from './components/Table'

export const metadata: Metadata = { title: 'Datatables Scroll' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Datatables Scroll" subtitle="DataTables" />
      <div className="container">
        <div className="grid grid-cols-1 gap-base">
          <Table />
        </div>
      </div>
    </>
  )
}

export default Page

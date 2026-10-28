import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import Example from './components/ColumnTable'

export const metadata: Metadata = { title: 'Column Searching Datatables' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Column Searching" subtitle="DataTables" />
      <div className="container">
        <div className="grid grid-cols-1 gap-base">
          <Example />
        </div>
      </div>
    </>
  )
}

export default Page

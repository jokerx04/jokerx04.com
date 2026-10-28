import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import JsTable from './components/JsTable'

export const metadata: Metadata = { title: 'Javascript Source Datatables' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Javascript Source" subtitle="DataTables" />
      <div className="container">
        <div className="grid grid-cols-1 gap-base">
          <JsTable />
        </div>
      </div>
    </>
  )
}

export default Page

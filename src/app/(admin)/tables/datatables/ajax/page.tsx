import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import AjaxTable from './components/AjaxTable'

export const metadata: Metadata = { title: 'Ajax DataTables' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Ajax" subtitle="DataTables" />
      <div className="container">
        <div className="grid grid-cols-1 gap-base">
          <AjaxTable />
        </div>
      </div>
    </>
  )
}

export default Page

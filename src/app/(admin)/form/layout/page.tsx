import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import LayoutForm from './components/LayoutForm'

export const metadata: Metadata = { title: 'Layouts' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Layouts" subtitle="Forms" />
      <div className="container">
        <LayoutForm />
      </div>
    </>
  )
}

export default Page

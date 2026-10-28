import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import EmailSidebar from '../components/EmailSidebar'
import NewEmail from './components/NewEmail'

export const metadata: Metadata = { title: 'New Email (Compose)' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="New Email (Compose)" subtitle="Apps" />
      <div className="container-fluid">
        <div className="lg:flex lg:h-[calc(100vh-190px)]">
          <EmailSidebar />
          <NewEmail />
        </div>
      </div>
    </>
  )
}

export default Page

import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import EmailSidebar from '../components/EmailSidebar'
import Emails from './components/Emails'

export const metadata: Metadata = { title: 'Inbox' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Email" subtitle="Apps" />

      <div className="lg:flex lg:h-[calc(100vh-200px)]">
        <EmailSidebar />
        <Emails />
      </div>
    </>
  )
}

export default Page

import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import CalendarPage from './components/CalendarPage'

export const metadata: Metadata = { title: 'Calendar' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="경제 캘린더" subtitle="주식" />
      <CalendarPage />
    </>
  )
}

export default Page

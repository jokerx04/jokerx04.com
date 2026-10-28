import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Empty' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Empty" subtitle="Pages" />
    </>
  )
}

export default Page

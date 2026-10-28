import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import LoadingButtons from './components/LoadingButtons'

export const metadata: Metadata = { title: 'Loading Buttons' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Loading Buttons" subtitle="Plugins" />

      <div className="container">
        <LoadingButtons />
      </div>
    </>
  )
}

export default Page

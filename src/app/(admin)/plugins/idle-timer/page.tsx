import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import IdleTracker from './components/IdleTracker'

export const metadata: Metadata = { title: 'Idle Timer' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Idle Timer" subtitle="Plugins" />
      <div className="container">
        <div className="grid grid-cols-1 gap-base">
          <IdleTracker />
        </div>
      </div>
    </>
  )
}

export default Page

import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import InputTouchspin from './components/InputTouchspin'
import ReactInputMask from './components/ReactInputMask'
import ReactTypeahead from './components/ReactTypeahead'

export const metadata: Metadata = { title: 'Other Plugins' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Other Plugins" subtitle="Forms" />
      <div className="container">
        <div className="grid grid-cols-1 gap-base">
          <ReactInputMask />
          <ReactTypeahead />
          <InputTouchspin />
        </div>
      </div>
    </>
  )
}

export default Page

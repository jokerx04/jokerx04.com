import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import TextDiff from './components/TextDiff'

export const metadata: Metadata = { title: 'Text Diff' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Text Diff" subtitle="Plugins" />
      <div className="grid xl:grid-cols-1 gap-base">
        <TextDiff />
      </div>
    </>
  )
}

export default Page

import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import Dropzone from './components/Dropzone'
import FilePondUploader from './components/FilePondUploader'

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'

export const metadata: Metadata = { title: 'File Upload' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="File Upload" subtitle="Forms" />
      <div className="container">
        <div className="grid grid-cols-1 gap-base">
          <Dropzone />
          <FilePondUploader />
        </div>
      </div>
    </>
  )
}

export default Page

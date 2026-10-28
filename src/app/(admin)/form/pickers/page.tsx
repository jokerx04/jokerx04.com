import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import ColorPicker from './components/ColorPicker'
import DataPicker from './components/DataPicker'
import Pickers from './components/Pickers'

export const metadata: Metadata = { title: 'Pickers' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Pickers" subtitle="Forms" />
      <div className="container">
        <div className="grid grid-cols-1 gap-base">
          <Pickers />
          <DataPicker />
          <ColorPicker />
        </div>
      </div>
    </>
  )
}

export default Page

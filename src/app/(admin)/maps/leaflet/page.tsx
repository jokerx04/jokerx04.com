import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
/*
import LeaFletMap from './components/LeaFletMap'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = { title: 'Leaflet' }
*/

import dynamic from 'next/dynamic'

// 브라우저 객체(window)를 사용하는 Leaflet 지도의 SSR 비활성화
const LeaFletMap = dynamic(() => import('./components/LeaFletMap'), {
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center">Loading map...</div>,
})

export const metadata: Metadata = { title: 'Leaflet' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Leaflet" subtitle="Maps" />
      <div className="grid xl:grid-cols-2 gap-base">
        <LeaFletMap />
      </div>
    </>
  )
}

export default Page

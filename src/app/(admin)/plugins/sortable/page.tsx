import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import SortableWithIconAndLabels from './components/SortableWithIconAndLabels'
import SortableWithIcons from './components/SortableWithIcons'

export const metadata: Metadata = { title: 'Sortable List' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Sortable" subtitle="Plugins" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-base">
        {/* <NestedSortableList />
        <NestedListWithHandle /> */}
        <SortableWithIcons />
        <SortableWithIconAndLabels />
      </div>
    </>
  )
}

export default Page

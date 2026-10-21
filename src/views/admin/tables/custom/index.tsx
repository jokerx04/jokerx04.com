import PageBreadcrumb from '@/components/PageBreadcrumb'
import TableWithCheckboxSelect from './components/TableWithCheckboxSelect'
import TableWithSearch from './components/TableWithSearch'
import TableWithSort from './components/TableWithSort'


const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Custom" subtitle="Tables" />
      <div className="container">
        <div className="grid grid-cols-1 gap-base">
          <TableWithSearch />
          <TableWithCheckboxSelect />
          <TableWithSort />
        </div>
      </div>
    </>
  )
}

export default Page

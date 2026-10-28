import PageBreadcrumb from '@/components/PageBreadcrumb'
import { Metadata } from 'next'
import KanbanPage from './components/KanbanPage'

export const metadata: Metadata = { title: 'Kanban' }

const Page = () => {
  return (
    <>
      <PageBreadcrumb title="Kanban" subtitle="Projects" />

      <KanbanPage />
    </>
  )
}

export default Page

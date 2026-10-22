import PageBreadcrumb from '@/components/PageBreadcrumb';
import ApiKeyTable from './components/ApiKeyTable';

const Page = () => {
	return (
		<>
			<PageBreadcrumb title="경제 캘린더" subtitle="주식" />
			<ApiKeyTable />
		</>
	);
};

export default Page;

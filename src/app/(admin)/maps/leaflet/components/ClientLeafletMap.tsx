'use client';

import dynamic from 'next/dynamic';

const LeaFletMap = dynamic(() => import('./LeaFletMap'), {
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center">Loading map...</div>,
});

export default function ClientLeafletMap() {
  return <LeaFletMap />;
}

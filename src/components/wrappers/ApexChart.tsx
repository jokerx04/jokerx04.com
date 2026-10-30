'use client'
import { type ApexChart as ApexChartType, type ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import type { Props as ReactApexChartsProps } from 'react-apexcharts'
import { useMemo } from 'react'

import { useLayoutContext } from '@/context/useLayoutContext'

const ReactApexCharts = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

type PropsType = {
  type?: ApexChartType['type']
  height?: number | string
  width?: number | string
  getOptions: () => ApexOptions
  series?: ApexOptions['series']
  className?: string
}

const isSupportedChartType = (type: ApexChartType['type'] | undefined): type is NonNullable<ReactApexChartsProps['type']> => {
  switch (type) {
    case 'line':
    case 'area':
    case 'bar':
    case 'pie':
    case 'donut':
    case 'radialBar':
    case 'scatter':
    case 'bubble':
    case 'heatmap':
    case 'candlestick':
    case 'boxPlot':
    case 'radar':
    case 'polarArea':
    case 'rangeBar':
    case 'rangeArea':
    case 'treemap':
      return true
    default:
      return false
  }
}

const ApexChart = ({ type, height, width = '100%', getOptions, series, className }: PropsType) => {
  const { skin, theme } = useLayoutContext()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = useMemo(() => getOptions(), [skin, theme, getOptions])

  const chartType = type ?? options.chart?.type
  const supportedChartType = isSupportedChartType(chartType) ? chartType : undefined

  return <ReactApexCharts type={supportedChartType} height={height ?? options.chart?.height} width={width ?? options.chart?.width} options={options} series={series ?? options.series} className={`apex-charts ${className || ''}`} />
}

export default ApexChart

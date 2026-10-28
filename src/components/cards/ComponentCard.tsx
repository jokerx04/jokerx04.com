'use client'
import Icon from '@/components/wrappers/Icon'
import clsx from 'clsx'
import { useState } from 'react'

type ComponentCardProps = {
  title: string
  badge?: React.ReactNode
  isCollapsible?: boolean
  isRefreshable?: boolean
  isCloseable?: boolean
  className?: string
  bodyClassName?: string
  titleClassName?: string
  actionClassName?: string
  children: React.ReactNode
}

const ComponentCard = ({ title, badge, isCollapsible, isRefreshable, isCloseable, className, bodyClassName, titleClassName, actionClassName, children }: ComponentCardProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleRefresh = () => {
    setIsRefreshing(true)

    setTimeout(() => {
      setIsRefreshing(false)
    }, 1500)
  }

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev)
  }

  if (!isVisible) return null

  return (
    <div className={`card group relative ${className} ${isCollapsed ? 'card-collapsed' : ''}`}>
      {isRefreshing && (
        <div className="card-overlay absolute inset-0 z-20 flex items-center justify-center">
          <div className="size-8 animate-spin rounded-full border-3 border-primary border-t-transparent"></div>
        </div>
      )}

      <div className="card-header flex justify-between items-center">
        <h4 className={`card-title ${titleClassName}`}>
          {title}
          {badge}
        </h4>

        <div className={clsx('flex gap-1', actionClassName)}>
          {isCollapsible && (
            <button onClick={toggleCollapse} data-action="card-toggle" className="size-6 flex justify-center items-center rounded-full bg-light hover:bg-primary/15 hover:text-primary">
              <Icon icon="chevron-up" className={`text-base transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
            </button>
          )}

          {isRefreshable && (
            <button onClick={handleRefresh} className="size-6 flex justify-center items-center rounded-full bg-light hover:bg-primary/15 hover:text-primary">
              <Icon icon="refresh" className="text-base" />
            </button>
          )}

          {isCloseable && (
            <button onClick={handleClose} className="size-6 flex justify-center items-center rounded-full bg-light hover:bg-primary/15 hover:text-primary">
              <Icon icon="x" className="text-base" />
            </button>
          )}
        </div>
      </div>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[500px] opacity-100'}`}>{!isCollapsed && <div className={`card-body overflow-hidden ${bodyClassName}`}>{children}</div>}</div>
    </div>
  )
}

export default ComponentCard

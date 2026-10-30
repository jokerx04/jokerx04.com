'use client'
//import 'jsvectormap'
//import 'jsvectormap/dist/maps/world-merc.js'
//import 'jsvectormap/dist/maps/world.js'

import { HTMLAttributes, useEffect } from 'react'

type BaseVectorMapProps = {
  id: string
  options?: Record<string, unknown>
} & HTMLAttributes<HTMLDivElement>

const BaseVectorMap = ({ id, options, ...props }: BaseVectorMapProps) => {
  useEffect(() => {
    let isCancelled = false

    const initializeMap = async () => {
      await Promise.all([
        import('jsvectormap'),
        import('jsvectormap/dist/maps/world-merc.js'),
        import('jsvectormap/dist/maps/world.js'),
      ])

      if (!isCancelled) {
        new window.jsVectorMap({
          selector: `#${id}`,
          ...options,
        })
      }
    }

    void initializeMap()

    return () => {
      isCancelled = true
    }
  }, [id, options])

  return <div id={id} {...props} />
}

export default BaseVectorMap

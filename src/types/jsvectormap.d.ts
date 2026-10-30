declare module 'jsvectormap'
declare module 'jsvectormap/dist/maps/world-merc.js'
declare module 'jsvectormap/dist/maps/world.js'

interface Window {
  jsVectorMap: new (options: { selector: string; [key: string]: unknown }) => unknown
}

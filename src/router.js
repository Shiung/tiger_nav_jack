import { lazy } from 'react'

const Home = lazy(() => import('pages/Home'))
const Detection = lazy(() => import('pages/Detection'))
const Verify = lazy(() => import('pages/Verify'))

const ROUTER_CONFIG = [
  { path: '/', name: 'home', exact: true, component: Home, },
  { path: '/detection', name: 'detection', exact: true, component: Detection },
  { path: '/verify', name: 'verify', exact: true, component: Verify }
]

export default ROUTER_CONFIG

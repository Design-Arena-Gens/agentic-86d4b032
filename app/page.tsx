'use client'

import { Suspense } from 'react'
import Scene from '@/components/Scene'
import UI from '@/components/UI'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Suspense fallback={<LoadingScreen />}>
        <Scene />
        <UI />
      </Suspense>
    </main>
  )
}

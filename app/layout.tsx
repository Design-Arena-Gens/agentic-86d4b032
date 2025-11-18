import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solar System Portfolio',
  description: 'An immersive 3D journey through space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

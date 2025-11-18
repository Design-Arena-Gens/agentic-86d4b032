'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function UI() {
  const [showUI, setShowUI] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowUI(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showUI && (
        <>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '16px 32px',
                textAlign: 'center',
              }}
            >
              <h1
                className="text-glow"
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  margin: 0,
                  letterSpacing: '2px',
                  background: 'linear-gradient(135deg, #64C8FF 0%, #B494FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                SOLAR PORTFOLIO
              </h1>
              <p
                style={{
                  fontSize: '14px',
                  color: '#aaa',
                  marginTop: '8px',
                  letterSpacing: '1px',
                }}
              >
                Navigate the cosmos of creativity
              </p>
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '30px',
              zIndex: 10,
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '20px',
                maxWidth: '280px',
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#64C8FF',
                }}
              >
                Controls
              </h3>
              <div style={{ fontSize: '13px', color: '#ccc', lineHeight: '1.8' }}>
                <div>🖱️ <strong>Drag</strong> to rotate</div>
                <div>🔍 <strong>Scroll</strong> to zoom</div>
                <div>🪐 <strong>Click planets</strong> for info</div>
                <div>✨ <strong>Hover</strong> to highlight</div>
              </div>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '30px',
              zIndex: 10,
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '20px',
                maxWidth: '300px',
              }}
            >
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#B494FF',
                }}
              >
                About This Experience
              </h3>
              <p style={{ fontSize: '13px', color: '#ccc', lineHeight: '1.7' }}>
                Each planet represents a different aspect of my portfolio. Explore
                the solar system to discover projects, skills, experience, and more.
              </p>
              <div
                style={{
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(100, 200, 255, 0.2)',
                }}
              >
                <div style={{ fontSize: '12px', color: '#888' }}>
                  Built with React Three Fiber, Three.js & Next.js
                </div>
              </div>
            </div>
          </motion.div>

          {/* Performance indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              zIndex: 10,
            }}
          >
            <div
              className="glass-panel pulse"
              style={{
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#4AE290',
                  boxShadow: '0 0 10px #4AE290',
                }}
              />
              <span style={{ fontSize: '13px', color: '#4AE290', fontWeight: '600' }}>
                SYSTEM ONLINE
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

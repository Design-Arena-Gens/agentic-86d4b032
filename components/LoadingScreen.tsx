'use client'

export default function LoadingScreen() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div
        className="text-glow pulse"
        style={{
          fontSize: '48px',
          fontWeight: '700',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #64C8FF 0%, #B494FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        INITIALIZING
      </div>
      <div
        style={{
          width: '200px',
          height: '4px',
          background: 'rgba(100, 200, 255, 0.2)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #64C8FF 0%, #B494FF 100%)',
            animation: 'loading 1.5s ease-in-out infinite',
          }}
        />
      </div>
      <div
        style={{
          marginTop: '20px',
          fontSize: '14px',
          color: '#888',
          letterSpacing: '2px',
        }}
      >
        Loading solar system...
      </div>
      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}

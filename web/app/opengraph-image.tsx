import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const alt = `${siteConfig.name} – ${siteConfig.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(circle at 80% 10%, rgba(255,100,0,0.45), transparent 55%), radial-gradient(circle at 0% 100%, rgba(30,110,255,0.4), transparent 55%), #020205',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            fontSize: 40,
            fontWeight: 800,
            marginBottom: 32,
          }}
        >
          <span style={{ color: '#ffffff' }}>Cesta</span>
          <span style={{ color: '#f97316', marginLeft: 12 }}>Podnikateľa</span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            color: '#ffffff',
          }}
        >
          <span>Sprevádza ťa</span>
          <span style={{ color: '#f97316' }}>celou cestou podnikania.</span>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 32,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          Pre všetkých slovenských podnikateľov
        </div>
      </div>
    ),
    { ...size }
  )
}

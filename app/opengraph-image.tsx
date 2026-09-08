import { ImageResponse } from 'next/og';

export const alt = 'Walid Alsafadi, AI Engineer, Data Scientist, Researcher';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: '#faf9f7', color: '#1a1a1a', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '74px 84px', border: '18px solid #1a1a1a', fontFamily: 'serif' }}>
      <div style={{ display: 'flex', fontFamily: 'monospace', fontSize: 22, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#666' }}>AI Engineer · Data Scientist · Researcher</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 104, lineHeight: 0.92, letterSpacing: '-0.04em' }}>Walid Alsafadi</div>
        <div style={{ display: 'flex', marginTop: 28, fontFamily: 'monospace', fontSize: 22, color: '#666' }}>walidalsafadi.com</div>
      </div>
      <div style={{ display: 'flex', fontSize: 36 }}>WA.</div>
    </div>,
    size,
  );
}

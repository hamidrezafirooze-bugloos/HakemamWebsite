import { useEffect, useState } from 'react';

const FRAMES = ['/assets/goat-watermark-0.webp', '/assets/goat-watermark-1.webp', '/assets/goat-watermark-2.webp'];

export default function GoatRunWatermark({ style }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 120);
    return () => clearInterval(id);
  }, []);

  return (
    <div aria-hidden="true" style={{ position: 'absolute', pointerEvents: 'none', ...style }}>
      {FRAMES.map((src, i) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${src}')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            opacity: frame === i ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}

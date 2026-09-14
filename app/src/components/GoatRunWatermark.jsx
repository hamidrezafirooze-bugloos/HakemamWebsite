import { useEffect, useState } from 'react';

const FRAMES = ['/assets/goat-watermark-0.webp', '/assets/goat-watermark-1.webp', '/assets/goat-watermark-2.webp'];
const PATTERN_URL = '/assets/goat-pattern-boteh.webp';
const PATTERN_SIZE = '110px auto';

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
            backgroundImage: `url('${PATTERN_URL}')`,
            backgroundSize: PATTERN_SIZE,
            backgroundRepeat: 'repeat',
            WebkitMaskImage: `url('${src}')`,
            maskImage: `url('${src}')`,
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskPosition: 'bottom center',
            maskPosition: 'bottom center',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            opacity: frame === i ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}

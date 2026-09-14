export default function VideoWatermark({ src, style }) {
  return (
    <video
      aria-hidden="true"
      autoPlay
      loop
      muted
      playsInline
      style={{ position: 'absolute', pointerEvents: 'none', objectFit: 'cover', ...style }}
    >
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
    </video>
  );
}

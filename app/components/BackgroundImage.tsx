export default function BackgroundImage({ videoUrl }) {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src= https://www.youtube.com/watch?v=vHp-TL8QffM type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
    </div>
  );
}

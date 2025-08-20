export default function WavyDivider({
  waveLength = 21,
  amplitude = 6,
  height = 2,
}) {
  // Raw SVG string
  const waveSVG = `
    <svg width='100' height='20' xmlns='http://www.w3.org/2000/svg' aria-hidden="true">
      <path
        d='m0 10c10-8 15-8 25 0s15 8 25 0 15-8 25 0 15 8 25 0'
        stroke='#ff4e30'
        fill='none'
        stroke-width='5'
       />
    </svg>
  `;

  // Convert raw SVG into valid URI for CSS
  const encodedSVG = encodeURIComponent(waveSVG);

  return (
    <div
      className="w-full bg-repeat-x"
      style={{
        height: `${height * 0.25}rem`,
        backgroundImage: `url("data:image/svg+xml,${encodedSVG}")`,
        backgroundSize: `${waveLength}px ${amplitude}px`,
      }}
    />
  );
}

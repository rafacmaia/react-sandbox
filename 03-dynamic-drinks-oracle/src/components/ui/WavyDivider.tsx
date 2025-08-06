export default function WavyDivider({
  waveLength = 25,
  amplitude = 7,
  height = 2,
}) {
  return (
    <div
      className="w-full bg-repeat-x"
      style={{
        height: `${height * 0.25}rem`,
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m0 10c10-8 15-8 25 0s15 8 25 0 15-8 25 0 15 8 25 0' stroke='%23ff4e30' fill='none' stroke-width='6'/%3e%3c/svg%3e")`,
        backgroundSize: `${waveLength}px ${amplitude}px`,
      }}
    />
  );
}

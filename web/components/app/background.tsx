export default function Background() {
  return (
    <div className='absolute inset-0 -z-10 min-h-full w-full overflow-hidden bg-[#f6f7f9]'>
      <div
        className='pointer-events-none absolute inset-x-0 top-0 h-[720px] opacity-[0.5]'
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(37,99,235,0.16) 1.2px, transparent 1.2px)',
          backgroundSize: '26px 26px',
          maskImage:
            'linear-gradient(to bottom, black, transparent 85%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black, transparent 85%)',
        }}
      />
      <div
        className='pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full opacity-60'
        style={{
          background:
            'radial-gradient(circle, rgba(37,99,235,0.20) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  )
}

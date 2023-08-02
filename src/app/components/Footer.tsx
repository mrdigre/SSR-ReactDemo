
const links = [
    { name: 'Learm about us', href: '#' },
    { name: 'See our products', href: '#' },
    { name: 'Contact us!', href: '#' },
  ]

  
  export default function Footer() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-800 sm:py-4">
        
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="w-full ml-10 p-2 flex items-center">
          <div className="flex items-center justify-center w-1/2">
            
            <p className="text-lg leading-8 text-gray-300">
            Discover a world of possibilities with Tech Zone, 
            where technology meets convenience and innovation is just a click away.
            </p>
          </div>
          
          <div className="flex justify-center w-1/2">
            <div className="grid grid-cols-1 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-12">
              {links.map((link) => (
                <div key={link.name} className="flex items-center justify-center w-40">
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  )
}
  
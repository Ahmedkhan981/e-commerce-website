import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const logos = [
  { name: 'Hooli', href: '#', svg: '/Svg/hooli.svg' },
  { name: 'Lyft', href: '#', svg: '/Svg/lyft.svg' },
  { name: 'Aws', href: '#', svg: '/Svg/aws.svg' },
  { name: 'Reddit', href: '#', svg: '/Svg/reddit.svg' },
  { name: 'Stripe', href: '#', svg: '/Svg/stripe.svg' },
  { name: 'pied-piper', href: '#', svg: '/Svg/pied-piper.svg' }
];

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-8 bg-gray-100">
      <h2 className="text-xl font-semibold mb-6">Trusted By Over 4000 Big Companies</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((logo, index) => (
          <Link key={index} href={logo.href} passHref>
            <div className="flex items-center justify-center w-24 h-24">
              <Image width={100} height={100} src={logo.svg} alt={logo.name} className="w-full h-auto" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Logo;

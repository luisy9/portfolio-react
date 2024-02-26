import { Presentation, AboutMe } from './app/components';
import './App.css';

export const PortfolioApp = () => {
  return (
    <div className='bg-[#161d27] box-border p-0'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6'>
        {/* Presentation */}
        <section className='lg:h-screen lg:flex lg:justify-center md:flex md:justify-center md:h-screen pt-10 lg:pt-20 md:pt-20'>
          <Presentation />
        </section>
      </div>
      <div className='bg-[#1F2937]'>
        <div className='mx-auto max-w-5xl py-28'>
          {/* Tecnologias */}
          <section className=''>
            <AboutMe />
          </section>
        </div>
      </div>
    </div>
  );
};

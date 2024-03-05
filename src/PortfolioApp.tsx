import { Presentation, AboutMe, Projects } from './app/components';
import './App.css';

export const PortfolioApp = () => {
  return (
    <div className='bg-[#161d27] box-border'>
      <div className='mx-auto mx-w-7xl px-14'>
        {/* Presentation */}
        <section className='lg:h-screen lg:flex lg:justify-center pt-10 lg:pt-20 md:py-28'>
          <Presentation />
        </section>
      </div>
      <div className='bg-[#1F2937]'>
        <div className='mx-auto max-w-7xl py-28 lg:px-16 xl:px-28'>
          {/* Tecnologias */}
          <section className=''>
            <AboutMe />
          </section>
        </div>
      </div>
      <div className='mx-auto max-w-7xl py-28 lg:px-16 xl:px-28'>
        <section className='' id='about'>
          <Projects />
        </section>
      </div>
    </div>
  );
};

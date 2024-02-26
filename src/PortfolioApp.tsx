import { Presentation, Projects, AboutMe } from './app/components';
import './App.css';

export const PortfolioApp = () => {
  return (
    <div className='bg-[#161d27] box-border p-0'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6'>
        {/* Presentation */}
        <section className='h-auto pt-10 lg:pt-20 md:pt-20'>
          <Presentation />
        </section>
      </div>
      <div className='bg-[#1F2937]'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-1'>
          {/* Tecnologias */}
          <section className=''>
            <AboutMe />
          </section>

          {/* Proyectos recientes */}
          <section className=''></section>
        </div>
      </div>
    </div>
  );
};

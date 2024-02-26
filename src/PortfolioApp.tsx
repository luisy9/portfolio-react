import { Presentation, Projects } from './app/components';
import './App.css';

export const PortfolioApp = () => {
  return (
    <>
      {/* Presentation */}
      <div className=''>
        <Presentation />
      </div>

      {/* Tecnologias */}
      <div className=''>
        <Projects />
      </div>

      {/* Proyectos recientes */}
      <div className=''></div>
    </>
  );
};

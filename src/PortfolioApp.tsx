import './App.css';
import { NavBar } from './app/components/NavBar/NavBar';
import Presentation from './app/components/Presentation/Presentation';
import Tecnologies from './app/components/Tecnologies/Tecnologies';

export const PortfolioApp = () => {
  return (
    <>
      {/* Presentation */}
      <div className=''>
        <Presentation />
      </div>

      {/* Tecnologias */}
      <div className=''>
        <Tecnologies />
      </div>
      {/* Proyectos recientes */}
      <div className=''></div>
    </>
  );
};

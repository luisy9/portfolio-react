import { PortfolioApp } from '../PortfolioApp';
import { NavBar } from '../app/components/NavBar/NavBar';

export const Layout = () => {
    return (
        <div className="font-[Poppins]">
            <header>
                <NavBar />
            </header>
            <div className=''>
                <PortfolioApp />
            </div>
        </div>
    )
}

export default Layout

import { Link } from "react-router-dom";

const Header = () => {
    return (
      // h-18 w-18 p-4 mettre a la fin du responsive
        <header className=" bg-gradient-to-r from-gray-800 to-state-100 flex w-full justify-between h-18 w-18 p-4">
          <div className=" w-14"  ></div>
          {/* logo */}
        <nav className="w-full"> 
          <ul className=" text-white md:flex hidden justify-evenly ">  
          {/* md = responsive/mg  */}
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">A propos</Link>
            <Link to="/experiences"> Projets</Link>
            <Link to="/contact"> Contact</Link>
           

          </ul>
        </nav>
      </header>
          );
 };
export default Header;
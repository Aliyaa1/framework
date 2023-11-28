import { Link } from "react-router-dom";

const Header = () => {
    return (
      // h-18 w-18 p-4 mettre a la fin du responsive
        <header className=" bg-violet-300 flex w-full justify-between">
          <div className=" w-14" ></div>
        <nav className="w-full"> 
          <ul className="md:flex hidden justify-around">  
          {/* md = responsive/mg  */}
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">A propos</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/experiences"> Expériences</Link>

          </ul>
        </nav>
      </header>
          );
 };
export default Header;
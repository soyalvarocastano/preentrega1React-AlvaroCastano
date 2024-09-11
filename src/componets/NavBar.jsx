import CartWidget from "./CartWidget";
import "./NavBar.css"

export default function NavBar (){

    return (

        <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href=""> <img src="./images/logo.jpg" alt="logo" width={120} className="img-fluid"/></a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>

    <CartWidget/>
      
    </nav>
        </div>
    
        
  );
};
    
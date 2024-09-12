import { Link } from "react-scroll"

export default function NavBar (){
  return(
   <nav>
  <div className="h-10vh flex justify-content-between z-50 text-white lg:py-5 px-20 py-4">
    <div className="flex items-center flex-1">
      <span className="text-3xl font-bold">Logo</span>
    </div>
   <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
   <ul>
    <Link to="Inicio">
    <li>Inicio</li>
    </Link>
    <Link to="Servicios">
    <li>Servicios</li>
    </Link>
    <Link to="Contacto">
    <li>Contacto</li>
    </Link>
    <Link to="Formulario">
    <li>Formulario</li>
    </Link>
    </ul>
   </div>
  </div>
  </nav>
  )
}
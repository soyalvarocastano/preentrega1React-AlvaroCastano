import CartWidget from "./CartWidget";


const Navbar = () => {
  return (
    <nav className="bg-dark-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        
        <div className="flex-shrink-0">
          <img src="./images/logo.jpg" alt="Logo" className="h-10 w-auto"/>
        </div>

        
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-lg hover:text-gray-400">Inicio</a>
          <a href="/services" className="text-lg hover:text-gray-400">Servicios</a>
          <a href="/contact" className="text-lg hover:text-gray-400">Contacto</a>
          <a href="/form" className="text-lg hover:text-gray-400">Formulario</a>
        </div>

        
        <div>
          <CartWidget />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
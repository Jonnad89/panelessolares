import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">Paneles Solares</a>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Beneficios</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Cotización</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

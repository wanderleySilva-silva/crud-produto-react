import { Menu, Search } from 'react-feather';
import styles from './NavBar.module.css';

const NavBar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom" id={styles.customNavbar}>
      <div className="container-fluid">
        <button
          className="btn btn-link text-light me-3"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
        <a className="navbar-brand" href="#" id={styles.titulo}>
          Gerenciador de Produtos
        </a>

        {/*
        <div className="d-flex align-items-center">
          <div className="input-group">
            <span className="input-group-text bg-light">
              <Search size={18} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar recursos..."
            />
          </div>
        </div>
        */}
      </div>
    </nav>
  );
};

export default NavBar;

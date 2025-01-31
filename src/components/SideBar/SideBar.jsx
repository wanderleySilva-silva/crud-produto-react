import { Users, Settings, HelpCircle } from 'react-feather';
import styles from './SideBar.module.css';

const SideBar = ({ collapsed }) => {
  return (
    <div
      className={`sidebar ${collapsed ? 'd-none' : ''}`}
      id={styles.sidebar}
    >
      <div className="p-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active d-flex align-items-center custom-link" href="#" id={styles.navLink}>
              <Users className="me-2" size={20} />
              Recursos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center custom-link" href="#" id={styles.navLink}>
              <Settings className="me-2" size={20} />
              Configurações
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center custom-link" href="#" id={styles.navLink}>
              <HelpCircle className="me-2" size={20} />
              Ajuda
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

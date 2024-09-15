import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/imgs/react.svg';
import styles from './header.module.scss';

const Header = () => {
  const location = useLocation();

  function locationChecker(value: string) {
    return location.pathname === value ? `${styles.active}` : '';
  }

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/" className={`${styles.link} ${locationChecker('/')}`}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className={`${styles.link} ${locationChecker('/articles')}`}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              to="/links"
              className={`${styles.link} ${locationChecker('/links')}`}
            >
              Links
            </Link>
          </li>
        </ul>
      </nav>
      <img src={logo} alt="" width="40" />
    </header>
  );
};

export default Header;

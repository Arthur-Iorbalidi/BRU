import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <span className={styles.notFoundText}>Not Found</span>
      <Link to="/" className={styles.link}>
        Go to About Page
      </Link>
    </div>
  );
};

export default NotFound;

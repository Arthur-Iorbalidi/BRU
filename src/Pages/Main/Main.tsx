import About from './components/About/About';
import Cards from './components/Cards/cards';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <About></About>
      <Cards></Cards>
    </div>
  );
};

export default Main;

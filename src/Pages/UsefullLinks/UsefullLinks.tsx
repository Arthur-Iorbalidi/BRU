import styles from './UsefullLinks.module.scss';

const UsefullLinks = () => {
  return (
    <>
      <div className={styles.links}>
        <a href="https://react.dev/">React</a>
        <a href="https://react.dev/reference/react">React Reference Overview</a>
        <a href="https://react.dev/learn">Learn</a>
      </div>
    </>
  );
};

export default UsefullLinks;

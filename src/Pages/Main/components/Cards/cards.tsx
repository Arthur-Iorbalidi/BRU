import styles from './cards.module.scss';
import Card from './components/Card/card';

const Cards = () => {
  const advantages = [
    'Performance',
    'Large Ecosystem',
    'Component-Based',
    'Virtual DOM',
    'Declarative',
    'Community Support',
    'Efficient Updates',
  ];

  return (
    <div className={styles.images}>
      <h1>Advantages</h1>
      <div className={styles.container}>
        {advantages.map((item) => (
          <Card text={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;

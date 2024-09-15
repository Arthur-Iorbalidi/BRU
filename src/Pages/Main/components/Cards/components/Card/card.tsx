import styles from './card.module.scss';

interface IProps {
  text: string;
}

const Card = (props: IProps) => {
  return <div className={styles.card}>{props.text}</div>;
};

export default Card;

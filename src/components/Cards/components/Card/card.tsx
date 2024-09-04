import { Component } from "react";
import styles from './card.module.scss';

interface IProps {
    text: string;
}

class Card extends Component<IProps> {
    render() {
        return <div className={styles.card}>
            {this.props.text}
        </div>
    }
}

export default Card;
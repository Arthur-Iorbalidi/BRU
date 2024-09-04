import { Component } from "react";
import styles from './cards.module.scss';
import Card from "./components/Card/card";

class Images extends Component {
    advantages = ['Performance', 'Large Ecosystem', 'Component-Based', 'Virtual DOM', 'Declarative', 'Community Support', 'Efficient Updates']

    render() {
        return <div className={styles.images}>
            <h1>Advantages</h1>
            <div className={styles.container}>
                {this.advantages.map(item => <Card text={item}/>)}
            </div>
        </div>
    }
}

export default Images;
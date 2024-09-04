import { Component } from "react";
import styles from './Text.module.scss';

interface IProps {
    text: string,
}

class Text extends Component<IProps> {
    render() {
        return <p className={styles.text}>
            {this.props.text}
        </p>
    }
}

export default Text;
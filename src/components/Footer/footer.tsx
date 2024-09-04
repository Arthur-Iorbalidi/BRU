import { Component } from "react";
import styles from './footer.module.scss';

class Footer extends Component {
    render() {
        return <footer className={styles.footer}>
            <p>All right reserved</p>
        </footer>
    }
}

export default Footer;
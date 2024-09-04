import { Component } from "react";
import logo from '../../assets/imgs/react.svg'
import styles from './header.module.scss';

class Header extends Component {
    render() {
        return <header className={styles.header}>
                <h1>React</h1>
                <img src={logo} alt="" width="40"/>
        </header>
    }
}

export default Header;
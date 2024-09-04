import { Component } from "react";
import styles from './about.module.scss';
import Text from './components/Text/Text'

class About extends Component {
    private paragraph1 = 'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.'
    private paragraph2 = `Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.`

    render() {
        return <div id="about" className={styles.about}>
            <h1>About</h1>
            <Text text={this.paragraph1}/>
            <Text text={this.paragraph2}/>
            <Text text={this.paragraph1}/>
        </div>
    }
}

export default About;
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (

        <header>
            <nav className="container">
                <div className="DSmovie-nav-content">
                    <h1>DSmovie</h1>
                    <a href="https://github.com/UinterCarlosGregorio/DSmovie">
                        <div className="DSmovie-contact-container">
                            <GithubIcon />
                            <p className="DSmovie-contact-link">/devsuperior</p>

                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
export default  Navbar;
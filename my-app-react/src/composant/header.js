
import '../css/header.css'


function Header() {

    return (
        <div className='Header'>
            <nav>
                <ul>
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="Boutique.html">Boutique</a></li>
                    <li><a href="nouveauté.html">Nouveauté</a></li>
                    <li><a href="apropos.html">À propos</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li className='profils'><a href="">Profils</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
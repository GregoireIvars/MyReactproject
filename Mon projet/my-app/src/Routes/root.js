import '../Css/nav.css';

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="red">Reducer</a></li>
            <li><a href="contact">Contact</a></li>
            <li className="profil"><a href="login">useState</a></li>
            <li className="profil"><a href="profil">Profils</a></li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
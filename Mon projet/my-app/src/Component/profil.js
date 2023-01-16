import Root from "../Routes/root.js";
import '../Css/profil.css'


export default function Profils() {
    const profil = {
        username: "Bob du 64",
        email: "Youremail@mail.com",
        Age: "your age"
    };

    return (
        <div id="profil">
            <Root />
            <div className="profilPage">
                <h1>Your Profile</h1>
                <h3 className="name">
                    {profil.username || profil.email ? (
                        <>
                            Username :  {profil.username} <br />
                            Email :  {profil.email}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                </h3>
                {profil.Age && (
                    <h4>
                        Age :  {profil.Age}
                    </h4>
                )}
                  <button>Edit Profil</button>
            </div>
          
        </div>
    );
}

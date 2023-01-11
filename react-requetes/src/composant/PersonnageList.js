import Personnage from "./Personnage";

const PersonnageList = (props) => {
    return (
        <ul>
            {props.personnages.map((personnage) => (
                <Personnage
                    name={personnage.name}
                    gender={personnage.gender}
                    height={personnage.height}
                />
            ))}

        </ul>
    );
};
export default PersonnageList;
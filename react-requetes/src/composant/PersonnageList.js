import Personnage from "./Personnage";

const PersonnageList = (props) => {
    return (
        <ul>
            {props.personnages.map((personnage) => (
                <Personnage
                    key={personnage.id}
                    name={personnage.name}
                />
            ))}

        </ul>
    );
};
export default PersonnageList;

import { useReducer } from "react";



export function Red() {

    const reduce = (state, action) => {
        switch (action.type) {
            case "ouioui":
                alert("oui va sy ouioui");
                return { ...state, name: state.name };
            case "nonnon":
                alert("non ");
                console.log(state)
                return { ...state, name: state.name };
            default:
                console.log("wrong input try again")
                return state;
        }
    }


    const [state, dispatch] = useReducer(reduce, { name: "" })
    console.log(state)
    return (
        <>
            <div>
                <button onClick={() => { dispatch({ type: "ouioui" }) }}>Oui</button>
            </div>
            <button onClick={() => { dispatch({ type: "nonnon" }) }}>Non</button>
        </>
    )

}
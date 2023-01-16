import { useReducer } from "react";
import Root from "../Routes/root";

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
            <div className="App">
                <Root/>
                <header className="App-Header">
                    <h2>Reducer please select a button</h2>
                    <button className='button' onClick={() => { dispatch({ type: "ouioui" }) }}>Oui</button>

                    <button className='button' onClick={() => { dispatch({ type: "nonnon" }) }}>Non</button>
                </header>
            </div>
        </>
    )

}
import { useState } from "react";
import data from "./data"; // Make sure this path is correct
import './styles.css'

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multipe, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        // Logic for handling selection
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
        let copy = [...multipe];
        const findIndexOfCurrentId = copy.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId)
        if (findIndexOfCurrentId === -1) {
            copy.push(getCurrentId)
        } else {
            copy.splice(findIndexOfCurrentId, 1)
        }

        setMultiple(copy);
    }

    console.log(selected, multipe);
    return (
        <div className="wrapper">
            <div onClick={() => setEnableMultiSelection(!enableMultiSelection)} className="multi">
                Multiple Selection
            </div>
            <div className="accordian">
                {
                    data && data.length > 0 ? (  // Corrected the spelling of 'length'
                        data.map((dataItem) => (
                            <div
                                key={dataItem.id} // Adding key for each item
                                onClick={enableMultiSelection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
                                className="item"
                            >
                                <div className="title">
                                    <h3>{dataItem.questions}</h3> {/* Ensure this matches your data structure */}
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelection ? multipe.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div> : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                                }
                                {/* {
                                    selected === dataItem.id || multipe.indexOf(dataItem.id) !== -1 ? (
                                        <div className="content">{dataItem.answer}</div>
                                    ) : (null)
                                } */}
                            </div>
                        ))
                    ) : (
                        <div>Not Found</div>
                    )
                }
            </div>
        </div>
    )
}

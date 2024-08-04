import React, { useState } from 'react'
import data from './data';
import './styles.css'

const Accordian = () => {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let copystate = [...multiple];
        const findIndexofCurrentId
            = copystate.indexOf(getCurrentId);

        if (findIndexofCurrentId === -1) copystate.push(getCurrentId)
        else copystate.splice(findIndexofCurrentId, 1)

        setMultiple(copystate);
    }

    console.log(selected, multiple)

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => (
                            <div className='item'>
                                <div onClick={handleMultiSelection ? () =>

                                    handleMultiSelection(dataItem.id) :
                                    handleSingleSelection(dataItem.id)} className='title'>
                                    <h3>{dataItem.questions}</h3>
                                    <span>+</span>
                                </div>
                                <div className='content'>
                                    {
                                        selected === dataItem.id ? <div>{dataItem.answer}</div> : null
                                    }
                                </div>
                            </div>

                        ))
                        :
                        <div>Data Not Found</div>
                }
            </div>
        </div>
    )
}

export default Accordian;
import React, { useState } from 'react'
import data from './data';
import './styles.css'

const Accordian = () => {

    const [selected, setSelected] = useState(null)

    function handleOne(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return (
        <div className='wrapper'>
            <button>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => (
                            <div className='item'>
                                <div onClick={() => handleOne(dataItem.id)} className='title'>
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
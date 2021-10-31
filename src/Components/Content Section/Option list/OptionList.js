import React from 'react'
import './OptionList.scss'

export default function OptionList({options,head, speciality, list}) {
    return (
        <div className={"option-list "+list}>
            <h5 className="head">{head}</h5>
            <div className="option-container">
                <div className={"options-wrapper "+speciality}>
                {
                    options.map((option,index) =>(
                        <div className="option" key={index}>
                            <div className={`icon-wrapper`} style={{background:`${option.icon_bg}`}}>
                                <img src={`images/${option.option_icon}`} alt="" />
                            </div>
                            <p>{option.option_name}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

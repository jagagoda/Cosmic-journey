import React from "react";

const CrewRecord = ({item}) => {
    const { name, agency } = item;

    return(
        <div className='modal__data'>
            <div className='data__type'>
                { name }
            </div>

            <div className={'data__status'}>
                { agency }
            </div>
        </div>
    )
}

export default CrewRecord;

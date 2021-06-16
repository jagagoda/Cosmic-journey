
import React from "react";

const RocketRecord = ({item}) => {
    const { name, country } = item;

    return(
        <div className='modal__data'>
            <div className='data__type'>
                { name }
            </div>
            <div className={'data__status'}>
                { country }
            </div>
        </div>
    )
}

export default RocketRecord;

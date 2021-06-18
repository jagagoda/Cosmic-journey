import React from "react";

const CapsulesRecord = ({item}) => {
    const { status, type } = item;

    return(

        <div className='modal__data'>
            <div className='data__type'>
                { type }
            </div>

            <div className={'data__status'}>
                { status }
            </div>
        </div>
    )
}

export default CapsulesRecord;

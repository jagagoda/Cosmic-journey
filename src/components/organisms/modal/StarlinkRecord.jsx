import React from "react";

const RocketRecord = ({item}) => {
    const { height_km, velocity_kms } = item;

    return(
        <div className='modal__data'>
            <div className='data__type'>
                { velocity_kms }
            </div>
            <div className={'data__status'}>
                { height_km }
            </div>
        </div>
    )
}

export default RocketRecord;

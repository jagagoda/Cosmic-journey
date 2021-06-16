import React, {useState} from "react";
import '../_grid.scss';
import clsx from 'classnames';

const Index = ({ src, text, onClick }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            onClick={onClick}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={'grid__img'}
        >
            <div
                style={{
                    backgroundImage: `url(${src})`
                }}
                className={clsx({
                    'active': isHover
                })}
            />
            {!isHover ?
                <h1
                    className={clsx('grid__img__text', {
                        'active': isHover
                    })}
                >{text}</h1> :
                <h1
                    className={clsx('grid__img__text', {
                        'active': isHover
                    })}
                >Details</h1>
            }
        </div>
    )
};

export default Index

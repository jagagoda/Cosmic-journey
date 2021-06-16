import React from "react";
import { arrowUp, arrowDown, arrow } from '../../../assets/arrows';
import clsx from 'classnames';
import './index.styles.scss';

const Arrows = ({
    sort, onClick, isHovered
}) => {
    const getArrowByType = () => {
            switch(sort) {
                case 'asc':
                    return arrowUp;
                case 'desc':
                    return arrowDown;
                default:
                    return arrow;
            }
    }

    return(
        <img
            className={clsx("arrows", {
                'hidden': sort !== 'asc' && sort !== 'desc' && !isHovered
            })}
            src={getArrowByType()}
            alt="arrows"
            onClick={onClick}
        />
    )
}

export default Arrows;

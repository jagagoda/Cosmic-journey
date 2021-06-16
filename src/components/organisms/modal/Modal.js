import React, {useState, useEffect} from 'react';
import './_modal.scss';
import Cross from '../../../assets/cross.svg';
import Api from "../../../api";
import CapsulesHeader from "./CapsulesHeader";
import CrewHeader from "./CrewHeader";
import CapsulesRecord from "./CapsulesRecord";
import CrewRecord from "./CrewRecord";
import RocketsHeader from "./RocketsHeader";
import RocketsRecord from "./RocketsRecord";
import StarlinkHeader from "./StarlinkHeader";
import StarlinkRecord from "./StarlinkRecord";

const ModalWindow = ({
                         onClose, show
                     }) => {
    const [sort, setSort] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!show) {
            return;
        }

        let apiCall;

        switch (show) {
            case 'capsules':
                apiCall = Api.getCapsules();
                break;
            case "crew":
                apiCall = Api.getCrew();
                break;
            case 'starlink':
                apiCall = Api.getStarlink();
                break;
            case 'rockets':
                apiCall = Api.getRockets();
                break;
            default :
                return;
        }

        if (apiCall) {
            apiCall
                .then(response => {
                    setData(response.data);
                });
        }
    }, [show]);

    useEffect(() => {
        if (show !== 'capsules' || show !== 'starlink') {
            return;
        }

        if (data.length === 0 || (sort !== 'desc' && sort !== 'asc')) {
            return;
        }

        const newData = data.sort((a, b) => {
            if (!a.type || !b.type) {
                return 0;
            }

            if (sort === 'desc') {
                return a.type.localeCompare(b.type);
            } else {
                return b.type.localeCompare(a.type);
            }
        })

        setData(newData);
    }, [sort, show, data]);


    if (!show) {
        return null;
    }

    const triggerSort = () => {
        switch (sort) {
            default:
            case '':
                setSort('asc');
                break;
            case 'asc':
                setSort('desc');
                break;
            case 'desc':
                setSort('');
                break;
        }
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    <h2 className="modal__title">{show}</h2>
                    <div className="img__container">
                        <img onClick={onClose} src={Cross} alt="closing icon" className="modal__cross"/>
                    </div>
                </div>
                <div className="modal__body">
                    <div className="modal__table">
                        {show === 'capsules' &&
                        <CapsulesHeader
                            sort={sort}
                            triggerSort={triggerSort}
                        />
                        }
                        {show === 'crew' &&
                        <CrewHeader/>
                        }
                        {show === 'rockets' &&
                        <RocketsHeader/>
                        }
                        {show === 'starlink' &&
                        <StarlinkHeader/>
                        }
                        <div className="table">
                            {data && data.map((item, index) => {
                                if (show === 'capsules') {
                                    return <CapsulesRecord item={item} key={index}/>
                                } else if (show === 'crew') {
                                    return <CrewRecord item={item} key={index}/>
                                } else if (show === 'rockets') {
                                    return <RocketsRecord item={item} key={index}/>
                                } else if (show === 'starlink') {
                                    return <StarlinkRecord item={item} key={index}/>
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;

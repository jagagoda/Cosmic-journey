import React, {useState} from 'react';
import './_grid.scss';
import {img1, img2, img3, img4} from '../../../assets/grid';
import SimpleGrid from "./SimpleGrid";
import Modal from "../../organisms/modal/Modal";

const Grid = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="grid__container">
                <SimpleGrid onClick={() => setIsModalOpen("capsules")} src={img4} text="Capsules"/>
                <SimpleGrid onClick={() => setIsModalOpen("crew")} src={img1} text="Crew"/>
                <SimpleGrid onClick={() => setIsModalOpen("rockets")} src={img2} text="Rockets"/>
                <SimpleGrid onClick={() => setIsModalOpen("starlink")} src={img3} text="Starlink"/>
            </div>
            <Modal
                show={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>

    );
};
export default Grid;

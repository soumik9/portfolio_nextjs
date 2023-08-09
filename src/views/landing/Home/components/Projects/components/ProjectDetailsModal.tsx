import Modal from '@components/Modal/Modal';
import { IProject } from '@config/types/types';
import React from 'react'

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    data: IProject | undefined;
}

const ProjectDetailsModal = ({ open, setOpen, data }: Props) => {
    return (

        <Modal open={open} setOpen={setOpen}>
            <p>hello</p>
        </Modal>
    )
}

export default ProjectDetailsModal
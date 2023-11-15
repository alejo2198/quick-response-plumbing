import classes from './Modal.module.scss'
import { useState } from 'react';


export const Modal = ({children,closeModal}) => {
    const [isOpen,setIsOpen] = useState(true);

    const closeMenuHandler=(event)=> {
        setIsOpen(false)
        closeModal()
    }

    return(
        <div onClick={closeMenuHandler} className={`${classes.modal} ${isOpen && classes['modal--dark']}`}>
            {children}
        </div>
    )
}

export default Modal;
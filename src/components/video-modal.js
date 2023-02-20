import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose } from 'react-icons/ai';


export default function VideoModal({ isOpen, onClose }) {
    return isOpen ? <section style={{ zIndex: '9999', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100vw', height: '100vh', position: 'fixed', top: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kJQP7kiw5Fk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        <IconContext.Provider value={{ color: "red", size: "3em" }} >
            <AiOutlineClose onClick={onClose} />
        </IconContext.Provider>
    </section > : <></>
}


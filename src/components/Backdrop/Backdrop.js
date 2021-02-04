import React from 'react'
import './Backdrop.css';

const Backdrop = props => (
    props.show ? <div className="backdrop" onClick={props.onBackdropDismiss}></div> : null
)

export default Backdrop;
import React from "react";
import c from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div className={c.Dialogs}>
            <div className={c.DialogsList}>
                <div className={c.Dialog}>Dash</div>
                <div className={c.Dialog}>Nika</div>
                <div className={c.Dialog}>John</div>
                <div className={c.Dialog}>Deny</div>
            </div>
            <div className={c.Messages}>
                <div className={c.Message}>Hi!</div>
                <div className={c.Message}>How are you?</div>
                <div className={c.Message}>I'm good!</div>
            </div>
        </div>
    )
}

export default Dialogs;
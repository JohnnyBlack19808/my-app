import React from "react";
import { NavLink } from "react-router-dom";
import c from './Dialogs.module.css';

const DialogItem = (props) => {
    return(
        <div className={c.Dialog}>
            <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div>
            <div className={c.Message}>{props.text}</div>
        </div>
    )
}
const Dialogs = (props) => {

    
    let DialogsItemElement = props.DialogItemData.map(Dialog => <DialogItem name={Dialog.name} id={Dialog.id}/>)
    let MessagesElement = props.MessagesData.map(message => <Message id={message.id} text={message.text} />)
    return(
        <div className={c.Dialogs}>
            <div className={c.DialogsList}>
                {
                    DialogsItemElement
                }                
            </div>
            <div className={c.Messages}>
                {
                    MessagesElement
                }
            </div>
        </div>
    )
}

export default Dialogs;
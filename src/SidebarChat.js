import React from 'react';
import "./SidebarChat.css";
import { Link } from "react-router-dom";

function SidebarChat({ name, id }) {

    return (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                </div>
            </div>
        </Link>)
}

export default SidebarChat;
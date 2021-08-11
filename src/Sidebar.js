import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import SidebarChat from './SidebarChat';
import db from './firebase';

function Sidebar(props) {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.collection("usersContacts").doc("2gyQ7XUMuxZx3OCoqmivOdjLMFK2").collection("2gyQ7XUMuxZx3OCoqmivOdjLMFK2").where("status", "==", "CONFIRMED_VIA_SMS").limit(20).get().then((data) => {

            setRooms(data.docs.map(doc => (

                {
                    id: doc.id,
                    data: doc.data()
                }
            )
            ))
        })
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__chat">
                {rooms.length && rooms.map(room => (<SidebarChat key={room.id} id={room.data.id} name={room.data.firstName} />))}
            </div>
        </div>
    );
}

export default Sidebar;
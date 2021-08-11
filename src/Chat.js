import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { useParams } from 'react-router';
import db from './firebase';
import firebase from 'firebase';
import * as SendBird from "sendbird";

const sb = new SendBird({ appId: "F8143F61-755F-43A7-B10E-01F48B22F01C" });

function Chat(props) {
    const [input, setInput] = useState("");
    const [channelUrl, setChannelUrl] = useState("");
    // const [channelType, setChannelType] = useState("");
    const [messages, setMessages] = useState([]);
    const { roomId } = useParams();

    useEffect(() => {
        if (roomId) {

            sb.connect(roomId, function (user, error) {
                if (error) {
                    return;
                }
                sb.OpenChannel.createChannel(function (openChannel, error) {
                    if (error) {
                        return;
                    }

                    setChannelUrl(openChannel.url)

                });

            });


        }
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();

        sb.OpenChannel.getChannel(channelUrl, function (openChannel, error) {
            if (error) {
                return;
            }

            openChannel.enter(function (response, error) {

                if (error) {
                    return;
                }

                openChannel.sendUserMessage(input, "MESG", function (message, error) {
                    if (error) {
                        return;
                    }
                    let newMessages = [...messages, message.message]
                    setMessages(newMessages)

                });
            })
        });

        setInput("")
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerInfo">
                    <h2>{roomId}</h2>
                </div>
            </div>
            <div className="chat__body">

                {messages.map((message) => (
                    <p className={`chatMessage ${message.name === "Jai" && "chat_receiver"}`}>
                        {message}
                    </p>
                ))}


            </div>
            <div className="chat__footer">
                <form>
                    <input type="text" value={input} placeholder="Type a message" onChange={e => setInput(e.target.value)} />
                    <button type="submit" onClick={sendMessage}>Send</button>
                </form>
            </div>

        </div>
    );
}

export default Chat;
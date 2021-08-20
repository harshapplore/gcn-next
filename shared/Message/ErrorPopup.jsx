import { useState, useEffect } from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  padding: 10px 20px;
  line-height: 1.5em;
  background: var(--error);
  color: #fff;
  margin-block: 10px;
  border-radius: 10px;
  text-align: left;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .message-box {
    flex: 1;
  }

  .close-btn {
    height: 100%;
    width: 20px;
    margin-inline: 5px;
    cursor: pointer;
    align-self: flex-end;
    text-align: right;
  }
`;

const PopupWidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  position: absolute;
  top: 20px;
  margin: 0 auto;
  z-index: 2000;
`;

const Popup = ({ message, close }) => {
  const [_message, _setMessage] = useState("");

  useEffect(() => {
    if (typeof message === "string") _setMessage(message);

    if (typeof message === "object") _setMessage(message.message);
  }, [message]);

  return (
    <PopupContainer>
      <div className="message-box">{_message}</div>
      <div className="close-btn" onClick={close}>
        x
      </div>
    </PopupContainer>
  );
};

export const PopupWidget = ({ messages, close }) => {
  const [_messages, _setMessages] = useState([]);

  useEffect(() => {
    if (typeof messages === "string") _setMessages(messages);

    if (messages instanceof Array) {
      const _msgs = messages.flat().map((msg) => msg.message);
      _setMessages(_msgs);
    }
  }, [messages]);

  return messages ? (
    <PopupWidgetContainer>
      {_messages &&
        _messages.length > 0 &&
        _messages.map((msg, index) => (
          <Popup
            key={"error" + index}
            message={msg}
            close={() =>
              _setMessages([
                ..._messages.slice(0, index),
                ..._messages.slice(index + 1),
              ])
            }
          />
        ))}
    </PopupWidgetContainer>
  ) : null;
};

export default PopupWidget;

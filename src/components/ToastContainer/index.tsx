import React from 'react';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  // const messagesWithTransitions = useTransition(
  //   messages,
  //   message => message.id,
  //   {
  //     from: { right: '-120%' },
  //     enter: { right: '0%' },
  //     leave: { right: '-120%' },
  //   },
  // );
  // return (
  //   <Container>
  //     {messagesWithTransitions.map(({ item, key, props }) => (
  //       <Toast key={key} style={props} toast={item} />
  //     ))}
  //   </Container>
  // );
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} toast={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;

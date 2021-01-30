import React from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  children: JSX.Element;
};

class Modal extends React.Component<ModalProps> {
  private modalElement: HTMLElement;
  private wrapperElement: HTMLElement;

  constructor(props: ModalProps) {
    super(props);
    this.modalElement = document.getElementById('modal-root');
    this.wrapperElement = document.createElement('div');
  }

  componentDidMount(): void {
    this.modalElement?.appendChild(this.wrapperElement);
  }

  componentWillUnmount(): void {
    this.modalElement?.removeChild(this.wrapperElement);
  }

  render(): JSX.Element {
    return ReactDOM.createPortal(this.props.children, this.wrapperElement);
  }
}

export default Modal;

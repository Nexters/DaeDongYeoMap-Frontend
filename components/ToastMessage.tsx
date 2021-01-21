import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastMessage: React.FC = () => {
  const notify = () => {
    toast('스팟이 등록되었어요!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  // TODO: 스팟이 등록되면 실행시키기

  return <ToastContainer />;
};

export default ToastMessage;

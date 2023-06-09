import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeDots
    height="100"
    width="100"
    // radius="9"
    color="#59c3de"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    wrapperClassName=""
    visible={true}
  />
);

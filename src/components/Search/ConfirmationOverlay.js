import { useDispatch } from 'react-redux';
import { clearCart } from '../../utils/cartSlice';

const ConfirmationOverlay = (props) => {
  const { setShowOverlay } = props;
  const dispatch = useDispatch();

  const handleClose = (e) => {
    e.preventDefault();
    setShowOverlay(false);
  };

  const handleClearCart = (e) => {
    e.preventDefault();
    dispatch(clearCart());
    setShowOverlay(false);
  };

  return (
    <div className='absolute z-20'>
      <div
        className='w-screen h-screen fixed top-0 left-0 bg-black opacity-80'
        onClick={handleClose}
      />
      <div className='w-2/5 h-auto bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 py-8 rounded-md'>
        <div className='mb-5 flex justify-center items-center'>
          <h3 className='p-5 py-2 font-bold rounded-full border-4 border-[#facea8] text-4xl text-[#f8bb86]'>
            !
          </h3>
        </div>
        <h3 className='text-2xl text-gray-600 font-semibold text-center'>
          Change Restaurant?
        </h3>
        <h3 className='my-4 text-gray-600 text-base font-medium text-center'>
          Clear cart and fresh add!
        </h3>
        <div className='flex justify-center gap-4'>
          <button
            onClick={handleClearCart}
            className='bg-blue-500 text-white p-2 rounded-sm'
          >
            Yes, Fresh Start!
          </button>
          <button
            onClick={handleClose}
            className='bg-red-500 text-white p-2 rounded-sm'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationOverlay;

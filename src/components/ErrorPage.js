import { useParams, useRouteError } from 'react-router';

const ErrorPage = () => {
  const { status, statusText } = useRouteError();
  return (
    <>
      <div className='w-full h-full m-5 p-10 rounded-lg flex justify-center items-center bg-gray-200 text-gray-400 font-medium'>
        Oops!! Something went wrong!!
      </div>
    </>
  );
};

export default ErrorPage;

import { useParams, useRouteError } from 'react-router';

const ErrorPage = () => {
  const { status, statusText } = useRouteError();
  return (
    <>
      <h2>Oops!! Something went wrong!!</h2>
      <h3>
        Status Code: {status || 'Unknown'}
        <br />
        Status Text: {statusText || 'Unknown'}
      </h3>
    </>
  );
};

export default ErrorPage;

import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/outline';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorTitle = 'Something went wrong!';
  let errorMessage = 'An unexpected error has occurred.';

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorTitle = '404 - Page Not Found';
      errorMessage = 'The page you are looking for does not exist.';
    } else if (error.status === 403) {
      errorTitle = '403 - Forbidden';
      errorMessage = 'You do not have permission to access this page.';
    } else if (error.status === 401) {
      errorTitle = '401 - Unauthorized';
      errorMessage = 'Please login to access this page.';
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <XCircleIcon className="mx-auto h-12 w-12 text-red-500" />
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              {errorTitle}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {errorMessage}
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Go Back
              </button>
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
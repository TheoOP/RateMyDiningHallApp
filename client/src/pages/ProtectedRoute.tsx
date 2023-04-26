import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuth ? (
        <Component />
      ) : (
        <Navigate to="/" replace={true} />
      )}
    />
  );
}

export default ProtectedRoute

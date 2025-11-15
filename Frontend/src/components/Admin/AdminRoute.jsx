// AdminRoute.js
import { Navigate } from 'react-router-dom';
import useUserRole from '../Firestore/useUserRole';

const AdminRoute = ({ children }) => {
  const { role, loading } = useUserRole();

  if (loading) return <p>Loading...</p>;
  return role === 'admin' ? children : <Navigate to="/" />;
};

export default AdminRoute;

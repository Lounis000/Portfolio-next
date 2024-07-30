// /src/hocs/withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth } from '../store/actions/authActions';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const loading = useSelector((state) => state.auth.loading);

    useEffect(() => {
      dispatch(checkAuth());
    }, [dispatch]);

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push('/login');
      }
    }, [loading, isAuthenticated, router]);

    if (loading || !isAuthenticated) {
      return <div>Loading...</div>; // Ou un spinner de chargement
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

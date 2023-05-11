// import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Layout } from './Layout';
import Welcome from '../pages/Welcome/Welcome';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import { userSelector } from '../store/user/selector';
import UserProfile from '../pages/UserProfile/UserProfile';
import Plans from '../pages/Plans/Plans';

const Router = () => {
  const { email } = useSelector(userSelector);
  return (
    <main>
      <Routes>
        <Route>
          {email ? (
            <>
              <Route path="plans" element={<Plans />} />
              <Route path="/profile" element={<UserProfile />} />
            </>
          ) : (
            <>
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </>
          )}

          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </main>
  );
};
export default Router;

// function Router() {
//   const { email } = useSelector(userSelector);
//   const router = createBrowserRouter([
//     {
//       element: <Layout />,
//       children: [
//         {
//           path: '/',
//           element: <Welcome />,
//         },
//         {
//           path: '/signUp',
//           element: <SignUp />,
//         },
//       ],
//     },
//   ]);
//
//   return <RouterProvider router={router} />;
// }
//
// export default Router;

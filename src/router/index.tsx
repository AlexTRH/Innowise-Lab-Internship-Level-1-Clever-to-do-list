import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { Layout } from './Layout';
import { Welcome } from '../pages/Welcome/Welcome';
import { SignUp } from '../pages/SignUp';

function Router() {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Welcome />,
                },
                {
                    path: '/signUp',
                    element: <SignUp />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Router;

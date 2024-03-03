import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/Home/Homepage';
import DetailPage from './Pages/Detail/Detailpage';
// import './App.css'

function App() {
  const routers = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/detail/:id", element: <DetailPage /> },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  
  );
}

export default App

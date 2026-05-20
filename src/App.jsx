import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './pages/Root';
import Favorites from './pages/Favorites';
import Search from './pages/Search';

 const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root /> }>
      <Route index element={ <Search /> } />
      <Route path='favorites' element={ <Favorites /> } /> 
    </Route>
  ));

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;

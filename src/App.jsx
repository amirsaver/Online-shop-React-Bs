import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import './App.css'
import Home from './pages/home';
import Cart from './pages/cart';
import User from './pages/user';
import SignUp from './pages/signup';
import { SharedContextProvider } from './components/ctx';
import RootLayout from './components/rootLayout';
import SignIn from './pages/signin';
import Products from './pages/products';
import Swim from './pages/swim';
import Martial from './pages/martial';
import ProdPage from './components/prodPage';
import About from './pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout /> } errorElement={<p>an error occured</p>}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="products/*" element={<Products />} > 
         <Route path="swimming" element={<Swim />} >
             <Route path=':id' element={<ProdPage/>}  />  
         </Route>
         <Route path="martial" element={<Martial />} >
             <Route path=':id' element={<ProdPage/>}  />  
         </Route>
        
      </Route>
      <Route path="cart" element={<Cart />} />
      <Route path="user" element={<User />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);


function App() {
  return (
    <SharedContextProvider>
      <RouterProvider router={router} />
    </SharedContextProvider>
  );
}

export default App

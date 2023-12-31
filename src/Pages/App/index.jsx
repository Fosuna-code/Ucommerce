import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import {ShoppingCartProvider} from '../../Context'
import './App.css'

function AppRoutes(){
  let routes = useRoutes([
    {path:"/", element: <Home/>},
    {path:"/MyAccount", element: <MyAccount/>},
    {path:"/MyOrder", element: <MyOrder/>},
    {path:"/MyOrders", element: <MyOrders/>},
    {path:"/SingIn", element: <SignIn/>},
    {path:"/*", element: <NotFound/>},
  ]);
  return routes;
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App

import './App.css';
import { Route,Routes } from 'react-router-dom';
import RestaurantScreen from './pages/RestaurantPage/RestaurantScreen';
import Checkout from './pages/RestaurantPage/components/Checkout/Checkout';
import PrivateRoute from './pages/RestaurantPage/helpers/PrivateRoute';
import Context from './pages/RestaurantPage/CartContext/Context';

function App() {
  return (
    <div className="App">
      <Context>
      <Routes>
        <Route path='/' element={<RestaurantScreen/>}/>
        <Route element={<PrivateRoute redirectTo={'/'}/>}>
            <Route path='thank-you' element={<Checkout/>} />
        </Route>
      </Routes>
      </Context>
    </div>
  );
}

export default App;

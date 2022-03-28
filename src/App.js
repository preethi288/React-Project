import './App.css';
import { Route,Routes } from 'react-router-dom';
import RestaurantScreen from './pages/RestaurantPage/RestaurantScreen';
import Checkout from './pages/RestaurantPage/components/Checkout/Checkout';
import PrivateRoute from './pages/RestaurantPage/helpers/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RestaurantScreen/>}/>
        <Route element={<PrivateRoute redirectTo={'/'}/>}>
            <Route path='thank-you' element={<Checkout/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

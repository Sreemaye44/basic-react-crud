import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Route/Route';

function App() {
  return (
    <div>
      <RouterProvider router= {router}></RouterProvider>
     
    </div>
  );
}

export default App;

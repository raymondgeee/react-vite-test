import RootLayout from './shared/components/Layouts/RootLayout'
import CarsLayout from './shared/components/Layouts/CarsLayout';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import CarsPage from './pages/Cars';
import CarPage from './pages/Car';
import AddCar from './pages/AddCar';
import NotFoundPage from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route element={<CarsLayout/>}>
            <Route path='/cars/' element={<CarsPage/>}/>
            <Route path='/cars/:id' element={<CarPage/>}/>
            <Route path='/cars/add' element={<AddCar/>}/>
          </Route>
      </Route>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App

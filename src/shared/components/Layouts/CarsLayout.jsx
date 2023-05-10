import { Outlet } from 'react-router-dom'

const CarsLayout = () => {
  return (
    <div className="cars-main">
      <div>Cars Layout Head</div>
        <Outlet/>
      <div>Cars Layout Foot</div>
    </div>
  )
}

export default CarsLayout

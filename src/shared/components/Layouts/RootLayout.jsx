import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="root-main">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cars">Cars</Link>

      <Header/>
        <Outlet context = {{ test : 'asdasdasdsad' }}/>
      <Footer/>
    </div>
  )
}

export default RootLayout

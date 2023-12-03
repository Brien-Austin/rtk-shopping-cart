import { Routes, Route } from 'react-router-dom'



import Cart from './pages/Cart'
import Home from './pages/Home'



const errorPage = () => {
  return <h1>
    Error Page not found
  </h1>
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
         <Route path='/cart' Component={Cart} />

        <Route path="*" Component={errorPage}/>
      </Routes>
     
    </>
  )
}
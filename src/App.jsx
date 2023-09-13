import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Gallery from './pages/Gallery'
import PhotoDetail from './pages/PhotoDetail'
import Dashboard from './pages/Dashboard'
import Purchases from './pages/Purchases'
import Navbar from './components/Navbar'
import {useSelector} from 'react-redux'
import Loader from './components/Loader'
import Toast from './components/Toast'
import Signup from './pages/Signup'

function App() {

  const isLoading = useSelector(state => state.isLoading)
  const toast = useSelector(state => state.toast)

  return (
    <HashRouter>
      {isLoading && <Loader />}
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/purchases" element={<Purchases />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/gallery/detail/:id" element={<PhotoDetail />}/>

    
      </Routes>
      
      {toast && <Toast type={toast.type} message={toast.message}/>}
      </HashRouter>
      
  )
}

export default App

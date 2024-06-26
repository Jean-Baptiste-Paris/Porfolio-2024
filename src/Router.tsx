import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Page404 from './pages/Page404'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default Router

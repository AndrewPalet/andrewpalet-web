import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.scss'

const Layout = () => {
  return (
    <div className="App">
      <div className="page">
        <Sidebar />
        <span className="tags top-tag">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tag">&lt;/body&gt;</span>
      </div>
    </div>
  )
}

export default Layout

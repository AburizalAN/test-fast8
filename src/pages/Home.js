import Navbar from 'components/Navbar'
import Sidebar from "components/Sidebar"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 bg-gray-100 flex items-center justify-center flex-col px-4 text-center">
            <div className="text-3xl font-bold text-teal-400 mb-4">
              Beranda
            </div>
            <p className='mb-5 text-gray-600'>Klik tombol di bawah untuk melihat halaman Personnel List</p>
            <Link to="/personnel-list" className="btn btn-primary">
              <button className='bg-teal-400 hover:bg-teal-500 transition text-white p-3'>Ke Halaman Personnel List</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
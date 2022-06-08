import Sidebar from "components/Sidebar"
import Body from "components/Body"

const Home = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
    </>
  )
}

export default Home
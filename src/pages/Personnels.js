import Sidebar from "components/Sidebar"
import BodyPersonnels from "components/BodyPersonnels"

const Personnels = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <BodyPersonnels />
      </div>
    </>
  )
}

export default Personnels
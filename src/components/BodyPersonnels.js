import Navbar from 'components/Navbar'
import ContentHeader from 'components/ContentHeader'
import PersonnelList from 'components/PersonnelList'

const BodyPersonnels = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Navbar />
      <div className="p-8 bg-gray-100 flex-1 flex flex-col gap-8">
        <ContentHeader />
        <PersonnelList />
      </div>
    </div>
  )
}

export default BodyPersonnels
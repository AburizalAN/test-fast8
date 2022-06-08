import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'

const ContentHeader = () => {
  return (
    <div className="bg-white p-5 flex sm:items-center flex-col sm:flex-row gap-y-3">
      <div className="flex-1">
        <div className="text-xl font-bold text-teal-400">PERSONEL LIST</div>
        <div className="text-md text-gray-600">List of Personnels</div>
      </div>
      <div className="flex gap-x-5 gap-y-3 flex-col sm:flex-row">
        <div className="flex justify-between border-gray-300 border rounded-sm">
          <button className="text-teal-400 px-4"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          <input className="text-gray-400 font-medium flex-1 h-100" placeholder="Find Personnels" />
        </div>
        <button className="flex items-center justify-between gap-3 px-5 py-2 bg-teal-400 text-white rounded-sm">
          <div className="text-white font-medium">Add Personnel</div>
          <div className="text-white"><FontAwesomeIcon icon={faPlus} /></div>
        </button>
      </div>
    </div>
  )
}

export default ContentHeader;
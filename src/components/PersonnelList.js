import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import actions from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';

const PhotoWrapper = styled.div`
  min-width: 140px;
  max-width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
  display: grid;
  place-items: center;
  margin: 0 auto;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 639px) {
    min-width: 100px;
    max-width: 100px;
    height: 100px;
  }
`

const PersonelList = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { fetchDataUsers } = actions
  const { dataUsers, isLoading } = useSelector((state) => state.globalReducer)
  const { page: _page = null } = queryString.parse(location.search)
  const [page, setPage] = useState(_page ? parseInt(_page) : 1)

  const nextPage = () => {
    navigate(`?page=${page + 1}`)
    setPage(page + 1)
  }

  const prevPage = () => {
    navigate(`?page=${page - 1}`)
    setPage(page - 1)
  }
  
  useEffect(() => {
    dispatch(fetchDataUsers(page))
  }, [page])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {!isLoading && dataUsers.length > 0 ? dataUsers.map((user, i) => (
          <div key={i} tabIndex={0} className="bg-white rounded-xl">
            <div className="flex px-5 py-3 border-b border-slate-200">
              <div className="mr-auto">Personel ID: <span className="text-teal-400 font-medium">{user.id.value}</span></div>
              <div className="text-gray-400"><FontAwesomeIcon icon={faEllipsis} /></div>
            </div>
            <div className="flex items-start flex-row sm:flex-col px-5 py-3 gap-5">
              <PhotoWrapper>
                <img src={user.picture.large} alt="personel" />
              </PhotoWrapper>
              <div className="flex-1">
                <div className="mb-2">
                  <div className="text-sm font-semibold text-gray-600">Name</div>
                  <div className="text-md text-gray-500">{`${user.name.first} ${user.name.last}`}</div>
                </div>
                <div className="mb-2">
                  <div className="text-sm font-semibold text-gray-600">Telephone</div>
                  <div className="text-md text-gray-500">{user.cell}</div>
                </div>
                <div className="mb-2">
                  <div className="text-sm font-semibold text-gray-600">Birthday</div>
                  <div className="text-md text-gray-500">{moment(user.dob.date).format("DD MMMM")}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600">Email</div>
                  <div className="text-md text-gray-500 break-all">{user.email}</div>
                </div>
              </div>
            </div>
          </div>
        )) : null}

        {isLoading ? [...Array(4)].map((_, i) => (
          <Skeleton className="block" key={i} width="100%" height="400px" />
        )) : null}

      </div>
      <div className="flex items-center mx-auto gap-x-10">
          <button onClick={prevPage} disabled={page <= 1} className="flex gap-x-2 disabled:text-gray-400">
            <div><FontAwesomeIcon icon={faAngleLeft} /></div>
            <div>Previous Page</div>
          </button>
          <div className="text-sm text-gray-400">page: {page}</div>
          <button onClick={nextPage} disabled={page >= 7} className="flex gap-x-2 disabled:text-gray-400">
            <div>Next Page</div>
            <div><FontAwesomeIcon icon={faAngleRight} /></div>
          </button>
      </div>
    </>
  )
}

export default PersonelList;
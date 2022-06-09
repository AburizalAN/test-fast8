import styled from 'styled-components';
import GadjianLogo from 'assets/logo-gadjian.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faUsers, faCalendarAlt, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import actions from 'store/actions';
import { useNavigate, useLocation } from 'react-router-dom';

const LogoWrapper = styled.div`
  width: 100px;
  height: auto;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`
const Container = styled.div`
  background-color: white;
  transition: all .3s ease;
  position: relative;
  @media screen and (max-width: 767px) {
    position: fixed;
    width: 100%;
    top: 0;
    left: ${({ open }) => open ? '0' : '-100%'};
    height: 100vh;
    z-index: 99;
  }
  @media screen and (min-width: 768px) {
    min-width: 300px;
    height: 100vh;
  }
`
const SidebarList = styled.ul`
  li {
    padding: 10px 0;
    cursor: pointer;
    font-weight: 500;
  }
`
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const listSidebar = [
  { name: "Beranda", link: "/", logo: <FontAwesomeIcon icon={faHouseChimney} /> },
  { name: "Personnel List", link: "/personnel-list", logo: <FontAwesomeIcon icon={faUsers} /> },
  { name: "Daily Attendance", link: "/daily-attendance", logo: <FontAwesomeIcon icon={faCalendarAlt} /> },
]

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { openSidebar } = useSelector(state => state.globalReducer)
  const { setOpenSidebar } = actions

  const search = location.search.trim().length > 0 ? `${location.search}` : '';

  return (
    <Container open={openSidebar} className="p-5">
      <CloseButton
        onClick={() => dispatch(setOpenSidebar(!openSidebar))}
        className="grid md:hidden hover:bg-gray-200 transition text-gray-500"
      >
        <FontAwesomeIcon icon={faXmark} />
      </CloseButton>
      <LogoWrapper className="pb-16">
        <img src={GadjianLogo} alt="Gadjian Logo" />
      </LogoWrapper>
      <SidebarList>
        {listSidebar.map((item, i) => (
          <li 
            onClick={() => {
              navigate(`${item.link}${search}`)
              dispatch(setOpenSidebar(!openSidebar))
            }}
            tabIndex={0}
            className={`flex items-center gap-x-3 ${location.pathname === item.link ? 'text-teal-400' : 'text-gray-600'}`}>
            <div className={`w-7 text-center`}>
              {item.logo}
            </div>
            <div>
              {item.name}
            </div>
          </li>
        ))}
      </SidebarList>
    </Container>
  )
}

export default Sidebar
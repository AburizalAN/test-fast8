import styled from 'styled-components';
import GadjianLogo from 'assets/logo-gadjian.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';

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
  transition: all .5s ease;
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
    color: #484848;
  }
`

const Sidebar = () => {
  const dispatch = useDispatch()
  const { openSidebar } = useSelector(state => state.globalReducer)

  return (
    <Container open={openSidebar} className="p-5">
      <LogoWrapper className="pb-16">
        <img src={GadjianLogo} alt="Gadjian Logo" />
      </LogoWrapper>
      <SidebarList>
        <li className="flex items-center gap-x-3">
          <div className="w-7 text-center"><FontAwesomeIcon icon={faHouseChimney} /></div>
          <div>
            Beranda
          </div>
        </li>
        <li className="flex items-center gap-x-3">
          <div className="w-7 text-center"><FontAwesomeIcon icon={faUsers} /></div>
          <div>
            Personal List
          </div>
        </li>
        <li className="flex items-center gap-x-3">
          <div className="w-7 text-center"><FontAwesomeIcon icon={faCalendarAlt} /></div>
          <div>
            Daily Attendance
          </div>
        </li>
      </SidebarList>
    </Container>
  )
}

export default Sidebar
import styled from 'styled-components';
import GadjianLogo from 'assets/logo-gadjian.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
  font-size: 13px
`
const LogoWrapper = styled.div`
  width: 100px;
  height: auto;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`

const Navbar = () => {
  return (
    <div className="p-5 flex items-center">
      <button
        className="block md:hidden mr-5 text-gray-400"
        onClick={() => {}}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <LogoWrapper className="block md:hidden">
        <img src={GadjianLogo} alt="Gadjian Logo" />
      </LogoWrapper>
      <div className="ml-auto flex gap-x-5 items-center">
        <div className="hidden md:block text-lg font-semibold">
          Hallo, <span className="text-teal-400">Gadjian User</span>
        </div>
        <AvatarWrapper>
          Photo
        </AvatarWrapper>
      </div>
    </div>

  )
}

export default Navbar
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
  font-size: 13px
`

const Navbar = () => {
  return (
    <div className="p-5 flex items-center">
      <div className="ml-auto flex gap-x-5 items-center">
        <div className="text-lg font-semibold">
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
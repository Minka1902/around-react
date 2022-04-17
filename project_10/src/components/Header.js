import logo from '../images/logo.svg';

export default function Header () {
  return (
    <header className="header">
      <img src={logo} alt="text logo around the us" className="header__logo" />
    </header>
  )
}
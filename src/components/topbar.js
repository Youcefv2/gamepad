import '../App.css';
import Logo from "../img/logo.png"

function TopBar() {
    return (
      <div className='topbar'>
        
        <div>
          <ul className='menu'>
          <a href="/"> <img src={Logo} alt="" /></a>
            <div className='navigation'>
            <a href="/favorite"><li>My collection</li></a> 
            <a href="/signin"><li className='login'>Login</li></a> 
            </div>
          </ul>
        </div>
        <hr />
      </div>
  );
}

export default TopBar;

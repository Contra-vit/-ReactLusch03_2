import {Link} from 'react-router-dom';

function Header() {
    return (
        <nav>
       
       <ul>
            {/* <li > <a href ='/'> main</a></li> 
            <li > <a href ='/about'> About</a></li>  */}

            <li> <Link to='/about'> About Us</Link></li>
            <li> <Link to='/cat'> Catalogy</Link></li> 

        </ul>
   

        </nav>

     )
}
export default Header;

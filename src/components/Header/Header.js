import { Link } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    return(
        <>
            <div className='d-flex justify-content-between headerMain'>
                <h6>SARVIKA TECH</h6>
                <div className='d-flex justify-content-between headerRoutes'>
                    <Link to="/add-user">Add User</Link>
                    <Link to="/">List Users</Link>
                </div>
            </div>
        </>
    )
}

export default Header
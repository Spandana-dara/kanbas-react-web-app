import { Link, useLocation } from "react-router-dom";
import './index.css'

function Navigation() {
    const links = ["Home", "Search", "Sign In", "Sign Up",""];
    const { pathname } = useLocation();
    return (
        <div className="navigationList">
            <div className={`navigationListItem ${pathname.includes("home") && "active"}`}>
            <Link to='/project/home' className={`navigationListItem `}>
                Home
            </Link>
            </div >
            <hr style={{margin:0}}/>
            <div className={`navigationListItem ${pathname.includes("search") && "active"}`}>
            <Link to='/project/search' className={`navigationListItem `}>
                Search
            </Link>
            </div>
            <hr style={{margin:0}}/>
            <div className={`navigationListItem ${pathname.includes("signin") && "active"}`}>
            <Link to='/project/signin' className={`navigationListItem `}>
                Sign In
            </Link>
            </div>
            <hr style={{margin:0}}/>
            <div className={`navigationListItem ${pathname.includes("signup") && "active"}`}>
            <Link to='/project/signup' className={`navigationListItem `}>
                Sign Up
            </Link>
            </div>
            <hr style={{margin:0}}/>
            <div className={`navigationListItem ${pathname.includes("account") && "active"}`}>
            <Link to='/project/account' className={`navigationListItem`}>
                Account
            </Link>
            </div>
        </div>
    );
}

export default Navigation;
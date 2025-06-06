import { CgProfile } from "react-icons/cg";
import { MdOutlineListAlt } from "react-icons/md";
import { LuBaggageClaim } from "react-icons/lu";
import { Link } from "react-router";
import { useSelector } from "react-redux";
const Header = ()=>{
    const bagData = useSelector((state) => state.bag);
    return <>
  <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
                <CgProfile></CgProfile>
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                <MdOutlineListAlt></MdOutlineListAlt>
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/bag">
                <LuBaggageClaim></LuBaggageClaim>
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bagData.length}</span>
            </Link>
        </div>
    </header>
    </>
}
export default Header;
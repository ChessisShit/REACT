import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/contactUs">
                <button>Contact Us</button>
            </Link>
            <Link to="/products/SuperLongAndRediculusProductId">
                <button> Product 1</button>
            </Link>
            <Link to="/useEffect">
                <button> Use Effect Form </button>
            </Link>
            <Link to="/api">
                <button> API </button>
            </Link>
        </div>
    );
}
 
export default Nav;
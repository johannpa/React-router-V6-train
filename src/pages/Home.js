import { Link, Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <section>
                <h2>Home page</h2>
                <Link to='/about' className='btn'>
                    About
                </Link>
                <Outlet/>
            </section>
        </>
    );
}
 
export default Home;
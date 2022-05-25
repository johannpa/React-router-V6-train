import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h2>Home page</h2>
            <Link to='/about' className='btn'>
                About
            </Link>
        </>
    );
}
 
export default Home;
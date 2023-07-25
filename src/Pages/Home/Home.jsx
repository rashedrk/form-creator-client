import { Link } from 'react-router-dom';
import plusIcon from '../../assets/plus.png'
const Home = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Create a Form</h2>
            <p>Create a new form to start collecting data from your users.</p>
            <Link to="">
                <div className="card w-60 mx-auto mt-10 text-center bg-base-100 shadow-xl">
                    <figure><img className='pt-10 px-10 ' src={plusIcon} alt="Create New Form" /></figure>
                    <div className="card-body ">
                        <p>Create Blank Form</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Home;
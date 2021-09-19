import logo from '.././img/Logo-white.svg';
import 'animate.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="primary-bg mt-7 d-flex justify-content-center">
                    <img src={logo} className="" alt="Home Tutor Logo" />
                </div>

                <h3 className="big-display-alt mt-5 text-center " style={{color: "#ffffff"}}>
                    Home Tutor
                </h3>

                <h3 style={{color : "#fff"}} className=" large-text mt-4 text-center">Learn from anything and anywhere</h3>

                <div className="mt-5 bottom-sheet animate__animated animate__fadeInUp animate__faster pb-5" id="signup-sheet">
                    <form method="POST" action="#" >
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <FontAwesomeIcon className="gray-color" icon={faEnvelope} />
                            </span>
                            <input type="email" placeholder="Email" className="form-control" />
                        </div>
                        
                        
                        <button type="submit" className="w-100 mt-3 btn btn-primary">
                            Sign In
                        </button>

                        <button type="submit" className="w-100 mt-3 btn btn-secondary">
                            Sign in with Google 
                        </button>

                    </form>
                    <p className="text-center base-text mt-3">
                        Already a Member? 
                        <Link className="link" to="/"> Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup

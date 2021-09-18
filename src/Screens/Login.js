import logo from '.././img/Logo-white.svg';
import 'animate.css'

const Login = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="primary-bg mt-10 d-flex justify-content-center">
                    <img src={logo} className="animate__animated animate__fadeIn" />
                </div>

                <h3 className="big-display-alt mt-5 text-center animate__animated animate__fadeIn animate__delay-1s " style={{color: "#ffffff"}}>
                    Home Tutor
                </h3>

                <h3 style={{color : "#fff"}} className={"animate__animated animate__fadeIn animate__delay-2s large-text mt-4 text-center"}>Learn from anything and anywhere</h3>

                <div className={"mt-5 bottom-sheet animate__animated animate__fadeInUp animate__faster animate__delay-2s pb-5"}>
                    <form method="POST" action="#" >
                        <input type="email" placeholder="Email" className={"form-control mb-3"} />
                        <input type="password" name="" placeholder="Password" id="" className="form-control" />
                        <button type="submit" className="w-100 mt-3 btn btn-primary">
                            Sign In
                        </button>

                        <button type="submit" className="w-100 mt-3 btn btn-secondary">
                            Sign in with Google 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
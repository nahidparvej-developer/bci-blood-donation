import React from 'react';

const LogIn = () => {





    const loginhandler=e => {
        e.preventDefualt();

        
    }
    return (
        <div>
            {/* <h1>loggggggggggggg</h1> */}




            <div className="hero min-h-screen bg-rose-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl text-center mt-2 font-bold">Login now!</h1>
                        <div className="card-body">

                            <form onSubmit={loginhandler}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                    <div >

                        <img src="https://i.ibb.co/1ZRsdYW/about-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LogIn;
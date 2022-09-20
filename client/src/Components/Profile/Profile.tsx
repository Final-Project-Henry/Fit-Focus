import "./styles/Profile.css"

const Profile = () => {
    return (
        <div className="container">
            <div className="main">
                <div className="topbar">
                    <a href="">Logout</a>
                    <a href="">Support</a>
                    <a href="">Work</a>
                    <a href="">Home</a>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-1">
                        <div className="card text-center sidebar">
                            <div className="card-body">
                                <img src="image.jpg" className="rounded-full" />
                                <div className="mt-3">
                                    <h3>Adrian Acurero</h3>
                                    <a href="">Home</a>
                                    <a href="">Work</a>
                                    <a href="">Support</a>
                                    <a href="">Setting</a>
                                    <a href="">Singout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 mt-1">
                        <div className="card mb-3 content">
                            <h1 className="m-3 pt-3">About</h1>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5>Full Name</h5>
                                    </div>
                                    <div className="col-md-9 text-secondary">
                                        Adrian Acurero
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5>Email</h5>
                                    </div>
                                    <div className="col-md-9 text-secondary">
                                        adrian@gmail.com
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5>Phone</h5>
                                    </div>
                                    <div className="col-md-9 text-secondary">
                                        04246633413
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5>Address</h5>
                                    </div>
                                    <div className="col-md-9 text secondary">
                                        street no. 4, xyz
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 content">
                            <h1 className="m-3">Recent Projects</h1>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5>Project Name</h5>
                                    </div>
                                    <div className="col-md text-secondary">
                                        Project Description
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
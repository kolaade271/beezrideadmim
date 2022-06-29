import Footer from "../components/footer";

function Profile() {
    return (
        <main className="col-md-9 ml-sm-auto col-lg-10 px-md-3 py-4">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0">
                    <div className="overview ">Profile</div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mb-4 mb-lg-0 " align="right">
                    <div className="col-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">

                        <div className="mr-3 mt-1">
                            <div className="admin-name">Pelumi Furtune<br /><div className="admintype">Superadmin</div></div>
                        </div>
                        <div className="mr-3 mt-1" align="right">
                            <img src="https://i.ibb.co/4VgSPDq/head.png" alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card profile-card">
                <div className=" card profile-cover">
                    <div className="profile-name">Pelumi Fortune</div>
                    <div className="profile-role">Super Admin</div>
                    <img src="https://i.ibb.co/4VgSPDq/head.png" className="profile-img" alt="" />
                </div>
                <div className="row profile-form">
                    <div className="col-12 col-md-7">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label>First Nmae </label>
                                    <input type="email" className="form-control profileinput" disabled placeholder="Pelumi" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="email" className="form-control profileinput" aria-describedby="emailHelp" placeholder="Furtune" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="email" className="form-control profileinput" aria-describedby="emailHelp" placeholder="(480) 555-0103" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label>Email </label>
                                    <input type="email" className="form-control profileinput" aria-describedby="emailHelp" placeholder="simmax456@gmail.com" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <input type="email" className="form-control profileinput" aria-describedby="emailHelp" placeholder="Male" />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label>Join Date</label>
                                    <input type="email" className="form-control profileinput" aria-describedby="emailHelp" placeholder="Mon, 09 May, 2022" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="row">
                            <div className="col-md-8 col-12">
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control chpw " placeholder="password" />
                                </div>
                            </div>

                            <div className="col-md-8 col-12">
                                <div className="form-group">
                                    <label>Confirm Password </label>
                                    <input type="password" className="form-control chpw " placeholder="Enter Password Again" />
                                </div>
                            </div>

                            <div className="col-md-8 col-12">
                                <button className="btn  btn-password">save password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default Profile;

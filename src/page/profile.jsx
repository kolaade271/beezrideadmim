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
         <div className="admin-name">Pelumi Furtune<br/><div className="admintype">Superadmin</div></div>
       </div>
       <div className="mr-3 mt-1" align="right">
        <img src="https://i.ibb.co/4VgSPDq/head.png" alt=''/>
      </div>
    </div>
  </div>
</div>
    
        {/* <div className="container-fluid">
          <div className="form-group has-search">
            <span className="form-control-feedback"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4.3" stroke="#2B3674" stroke-width="1.4" />
              <line x1="10.0101" y1="11" x2="8" y2="8.98995" stroke="#2B3674" stroke-width="1.4" stroke-linecap="round" />
            </svg>
            </span>
            <input type="text" className="form-control search" placeholder="Search" />
          </div>
        </div> */}
        <div className="card profile-card">
            <div className=" card profile-cover">
                <div className="profile-name">Pelumi Fortune</div>
                <div className="profile-role">Super Admin</div>
            <img src="https://i.ibb.co/4VgSPDq/head.png" className="profile-img" alt=""/>
            </div>
            
        </div>
       
        <Footer/>
      </main>
    );
  }
  
  export default Profile;
  
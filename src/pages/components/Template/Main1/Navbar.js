// import ApplicationStore from '../../../../utils/localStorageUtil';
// import { Link } from 'react-router-dom';
// import { useAuthContext } from '../../../../context/AuthContext';

// function Navbar(){
//   const { user, Logout } = useAuthContext();

//     const user_type = ApplicationStore().getStorage('user_type');
//     return(
//         <div>
//   <div className="wrap">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 d-flex align-items-center">
//           <p className="mb-0 phone pl-md-2">
//             <a href="#" className="mr-2"> </a> 
//             <a href="#"> </a>
//           </p>
//         </div>
//         <div className="col-md-6 d-flex justify-content-md-end">
//           <div className="social-media">
//             <p className="mb-0 d-flex">
//               <a href="#" className="d-flex align-items-center justify-content-center"></a>
//               <a href="#" className="d-flex align-items-center justify-content-center"></a>
//               <a href="#" className="d-flex align-items-center justify-content-center"></a>
//               <a href="#" className="d-flex align-items-center justify-content-center"></a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
//     <div className="container">
//       <a className="navbar-brand" href="index.html">City Corporation</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="oi oi-menu" /> Menu
//       </button>
//       <div className="collapse navbar-collapse" id="ftco-nav">
//         <ul className="navbar-nav ml-auto">
//         {user_type === "user" ? (
//         <>
//           <li className="nav-item active"><a href="/CustHome" className="nav-link">Home</a></li>
//           <li className="nav-item"><a href="/ApplyLicense" className="nav-link">Apply License</a></li>
//           <li className="nav-item"><a href="/RenewUserLi" className="nav-link">Renew License</a></li>
//           <li className="nav-item"><a href="/PermissionUser" className="nav-link">Permission</a></li>
//           <li className="nav-item"><a href="/ComplaintUser" className="nav-link">Complaint</a></li>
//           <li className="nav-item"><a href="/Change" className="nav-link">Setting</a></li>
//           <li className="nav-item"><a href="/Service" className="nav-link">service</a></li>
//           <li className="nav-item"><Link onClick={Logout} className="nav-link">Logout</Link></li>

//           </>
//       ) : user_type === "Municipal" ? (
//         <><li className="nav-item active"><a href="/CustHome" className="nav-link">Home</a></li>
//         <li className="nav-item"><a href="/LicenseReq" className="nav-link">License Request</a></li>
//         <li className="nav-item"><a href="/RenewLi" className="nav-link">Renew License</a></li>
//         <li className="nav-item"><a href="/Permission" className="nav-link">Permission</a></li>
//         <li className="nav-item"><a href="/Complaints" className="nav-link">Complaints</a></li>
//         <li className="nav-item"><a href="/Change" className="nav-link">Setting</a></li>
//         <li className="nav-item"><Link onClick={Logout} className="nav-link">Logout</Link></li>
// </>
//          ) :user_type === "Police" ?<>
//          <li className="nav-item active"><a href="/CustHome" className="nav-link">Home</a></li>
//         <li className="nav-item"><a href="/LiRequestPolice" className="nav-link">License Request</a></li>
//         <li className="nav-item"><a href="/RenewPolice" className="nav-link">Renew Licence</a></li>
//         <li className="nav-item"><a href="/Change" className="nav-link">Setting</a></li>
//         <li className="nav-item"><a href="/Service" className="nav-link">Service</a></li>
//         <li className="nav-item"><a href="/Contact" className="nav-link">Contact</a></li>
//         <li className="nav-item"><Link onClick={Logout} className="nav-link">Logout</Link></li>
// </>
//         :user_type === ""
//     }
//         </ul>
//       </div>
//     </div>
//   </nav>
 

// </div>


//     )
// }
// export default Navbar;


import ApplicationStore from '../../../../utils/localStorageUtil';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../../context/AuthContext';

function Navbar(){
  const { user, Logout } = useAuthContext();

    const user_type = ApplicationStore().getStorage('user_type');
    return(
<header>
  <div className="header-area header-transparent">
    <div className="main-header  header-sticky">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-2 col-md-1">
            <div className="logo">
              <a href="/CustHome"><img src="/cafe co.jpeg" alt  style={{width:"90px",height:"90"}}/></a>
            </div>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="menu-main d-flex align-items-center justify-content-end">
              <div className="main-menu f-right d-none d-lg-block">
                <nav> 
                  <ul id="navigation">
  


                    {user_type === "student" ? (<>
                    <li><a href="/CustHome"style={{ color: "red" }}>Home</a></li>
                    <li><a href="/ProductList"style={{ color: "red" }}>Items</a></li>
                    <li><a href="/Cart"style={{ color: "red" }}>Checkout</a></li>
                    <li><a href="/Change"style={{ color: "red" }}>Setting</a></li>
                     
                    </>)   :user_type === ""}
                  </ul>
                </nav>
              </div>
              <div className="header-right-btn f-right d-none d-lg-block ml-20">
                <a onClick={Logout} className="border-btn header-btn"style={{ color: "red" }}>Logout</a>
              </div>
            </div>
          </div>   
          <div className="col-12">
            <div className="mobile_menu d-block d-lg-none" />
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
    )
}
export default Navbar;

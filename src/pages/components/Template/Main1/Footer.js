function Footer(){
    return(
     <footer>
  {/*? Footer Start*/}
  <div className="footer-area section-bg" data-background="assets/img/gallery/section_bg02.png" style={{backgroundColor:"#b9b9b9"}}>
    <div className="container">
      <div className="footer-top footer-padding">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-8">
            <div className="single-footer-caption mb-50">
              {/* logo */}
              <div className="footer-logo">
                <a href="/CustHome"><img src="/cafe co.jpeg" alt  style={{width:"98px",height:""}}/></a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="/CustHome">Home</a></li>
                  <li><a href="/ProductList">Items</a></li>
                  <li><a href="/Cart">Checkout</a></li>
                  <li><a href="/Change">Setting</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="/Login">Login</a></li>
                  <li><a href="#">Policy</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Instagram */}
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4>Instagram Feed</h4>
              </div>
              <div className="instagram-gellay">
                <ul className="insta-feed">
                  <li><a href="#"><img src="assets/img/gallery/instagram1.png" alt /></a></li>
                  <li><a href="#"><img src="assets/img/gallery/instagram2.png" alt /></a></li>
                  <li><a href="#"><img src="assets/img/gallery/instagram3.png" alt /></a></li>
                  <li><a href="#"><img src="assets/img/gallery/instagram4.png" alt /></a></li>
                  <li><a href="#"><img src="assets/img/gallery/instagram5.png" alt /></a></li>
                  <li><a href="#"><img src="assets/img/gallery/instagram6.png" alt /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-xl-9 col-lg-8">
            <div className="footer-copy-right">
              <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by Prashanth M
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            {/* Footer Social */}
            <div className="footer-social f-right">
              <p>Contact</p>
              <p>Prashanth M</p>
              <p>prashanthkulal337@gmail.com</p>
              <a href="https://www.facebook.com/prashanth.m.kulal?mibextid=kFxxJD"><i className="fab fa-facebook-f" /></a>
              <a href="https://www.instagram.com/prashanth_m_kulal?igsh=MTdnMW1xMWFlNmEwZg=="><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End*/}
</footer>



    )
}
export default Footer;
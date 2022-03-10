import React, { Component } from "react";
import FooterContent from "./footerContent";

class Footer extends React.Component {
  render() {
    return (
      <div
        className="text-light page-footer font-small indigo"
        style={{
          position: "relative",
          background: "rgba(62,107,167, .5)",
          background:
            "linear-gradient(180deg, rgba(250,250,250, .25) 2%, rgba(12,23,33, .9) 36%)",
        }}
      >
        <div className="container">
          <div className="row text-center d-flex justify-content-center pt-5 mb-3"></div>

          <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
            <div className="col-md-8 col-12 mt-5">
              <p style={{ lineHeight: "1.7rem" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur.
              </p>
            </div>

            <div className="row pb-3">
              <div className="col-md-12">
                <div className="mb-5 flex-center">
                  <a className="fb-ic">
                    <i className="bi bi-facebook"> </i>
                  </a>

                  <a className="tw-ic">
                    <i className="bi bi-twitter"></i>
                  </a>

                  <a className="gplus-ic">
                    <i className="fab fa-google-plus-g fa-lg white-text mr-4"></i>
                  </a>

                  <a className="li-ic">
                    <i className="bi bi-linkedin bi-lg white-text mr-4"></i>
                  </a>

                  <a className="ins-ic">
                    <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
                  </a>

                  <a className="pin-ic">
                    <i className="fab fa-pinterest fa-lg white-text"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2022 Copyright:
            <a href="https://mdbootstrap.com/"></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

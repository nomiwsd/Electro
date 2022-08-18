import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import "./Footer.css"
function Footer() {
  const style = { color: "red", margin:"5px"};
  return (
    <div className="bg-dark text-light">
      <div class="container my-5">
        <footer class="text-center text-lg-start text-light">
          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto ">
                  <h6 class="text-uppercase fw-bold">About Us</h6>
                  <hr class=" mt-0 d-inline-block mx-auto mb-0" />
                  <p class=" mt-0  mx-auto mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut.
                  </p>

                  <p class=" mt-0  mx-auto ">
                    {" "}
                    <a className="linkh ">
                      <BsFillTelephoneFill style={style} />
                      +021-95-51-84
                    </a>
                  </p>
                  <p class=" mt-0  mx-auto ">
                    <a className="linkh  ">
                      <MdEmail style={style} />
                      email@email.com
                    </a>
                  </p>
                  <p class=" mt-0  mx-auto ">
                    <a className="linkh  ">
                      <ImLocation style={style} />
                      1734 Stonecoal Road
                    </a>
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Categories</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto"></hr>

                  <p>
                    <a href="#!" class="text-light">
                    Hot Deals
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-light">
                     Laptops
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-light">
                      Smartphones
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-light">
                      Cameras
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-light">
                      Accessories
                    </a>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Information</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto"></hr>

                  <p>
                    <a href="#!" class="text-light">
                    About Us
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-light">
                     Contact Us
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-light">
                     Privacy Policy
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-light">
                     Orders and Returns
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-light">
                   Terms and Condition
                    </a>
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Services</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto"></hr>

                  <p class="">
<a href="#!" class="text-light ">
My Account
</a>
</p>
<p>
<a href="#!" class="text-light">
 View Cart
</a>
</p>
<p>
<a href="#!" class="text-light">
 Wishlist
</a>
</p>
<p>
<a href="#!" class="text-light">
 Track My Order
</a>
</p>
<p>
<a href="#!" class="text-light">
Help
</a>
</p>
                </div>
              </div>
            </div>
          </section>

          <div class="text-center p-3">
            © 2020 Copyright:
            <a class="text-light">MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;


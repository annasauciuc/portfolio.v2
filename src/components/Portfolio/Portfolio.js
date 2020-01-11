import React from "react";
function Portfolio() {
  return (
    <React.Fragment>
      <section data-aos="fade-left" className=" container banner-section">
        <div className="text-left w-50 about-title text-white">
          <h1 className="mb-1 mt-5">Portfolio.</h1>
        </div>

        <h3 className="text-center mt-5 mb-5">Projects</h3>
        <div className="row  col-lg-12  col-xl-12  col-md-12 col-xs-12 container text-center">
          <div class="cards col-lg-4 col-sm-6 ml-2 p-1" style={{ maxWidth: "540px" }}>
            <div class="row  ">
              <div class="col-md-4">
                <img src="..." class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural

                  </p>

                </div>
              </div>
            </div>
          </div>
          <div class="cards  col-lg-4 col-sm-6  p-1" style={{ maxWidth: "540px" }}>
            <div class="row ">
              <div class="col-md-4">
                <img src="..." class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div class="cards  col-lg-4 col-sm-6  p-1" style={{ maxWidth: "540px" }}>
            <div class="row">
              <div class="col-md-4">
                <img src="..." class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </React.Fragment>
  );
}
export default Portfolio;

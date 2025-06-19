import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"150px"}} src="media/streakLogo.png" />
          <p className="text-small text-muted mt-2">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"200px"}} src="media/sensibullLogo.svg" />
          <p className="text-small text-muted mt-2">Option trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"150px"}} src="media/zerodhaFundhouse.png" />
          <p className="text-small text-muted mt-2">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"150px"}} src="media/goldenpiLogo.png" />
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"150px"}} src="media/dittoLogo.png" />
          <p className="text-small text-muted mt-2">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
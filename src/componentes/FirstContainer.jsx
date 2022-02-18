import React from "react";
import Circles from "../images/pattern-circles.svg";

export default function FirstContainer() {
     return (
          <>
               <div className="first-container">
                    <div className="inner-container-first">
                         <img src={Circles} alt="circles" className="circles" />
                         <h1 className="main-title">
                              Simple, traffic-based pricing
                         </h1>
                         <p className="first-container-info">
                              Sign-up for our 30-day trial.{" "}
                              <br className="mobile" /> No credit card required.
                         </p>
                    </div>
               </div>
          </>
     );
}

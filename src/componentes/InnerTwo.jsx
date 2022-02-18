import React from "react";

export default function InnerTwo({ manejar }) {
     return (
          <>
               <div className="inner-snd-two">
                    <p className="info">
                         Monthly Billing{" "}
                         <label className="switch-container">
                              <input type="checkbox" onChange={manejar} />
                              <span className="switch"></span>
                         </label>{" "}
                         Yearly Billing{" "}
                         <b className="yellow desktop">
                              -25% discount
                         </b>
                         <b className="yellow mobile">
                              -25%
                         </b>
                         {" "}
                    </p>
               </div>
          </>
     );
}

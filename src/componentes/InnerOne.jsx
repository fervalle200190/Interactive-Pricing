import React from "react";

export default function InnerOne({ slider, check, referencia }) {
     const views = ["10", "30", "50", "80", "100", "200", "350", "500", "700"];
     const prices = ["2", "5", "8", "12", "16", "20", "25", "32", "38"];
     const calcPer = (num)=> {
          let year = num * 12
          let descuento = parseInt(year) * 0.25
          return parseInt(year) - descuento
     }
     return (
          <>
               <div className="inner-snd-one">
                    <h3 className="page-title">
                         {views[slider[0]]}k pageviews
                    </h3>
                    <div className="slider-container">
                         <input
                              type="range"
                              min={0}
                              max={8}
                              value={slider[0]}
                              onChange={(e) => slider[1](e.target.value)}
                              className="slider"
                              ref={referencia}
                         />
                    </div>
                    <p className="price">
                         <b className="dark">
                              $
                              {check
                                   ? calcPer(prices[slider[0]])
                                   : prices[slider[0]]}
                              .00
                         </b>
                         / {check ? "year" : "month"}
                    </p>
               </div>
          </>
     );
}

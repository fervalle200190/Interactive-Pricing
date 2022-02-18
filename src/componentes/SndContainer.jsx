import React, { useState, useRef, useEffect } from "react";
import InnerOne from "./InnerOne";
import InnerThree from "./InnerThree";
import InnerTwo from "./InnerTwo";

export default function SndContainer() {
     const [check, setCheck] = useState(false);
     const [slider, setSlider] = useState(4);
     const backSlider = useRef();
     const handleCheck = (e) => {
          setCheck(e.target.checked);
     };
     useEffect(() => {
          let valor = (100 / 8) * slider,
               toUse = `${valor}%`;
          backSlider.current.style.setProperty("--value", toUse);
     }, [slider]);
     return (
          <>
               <div className="snd-container">
                    <div className="inner-snd-container">
                         <InnerOne
                              check={check}
                              slider={[slider, setSlider]}
                              referencia={backSlider}
                         />
                         <InnerTwo manejar={handleCheck} />
                    </div>
                    <InnerThree />
               </div>
          </>
     );
}

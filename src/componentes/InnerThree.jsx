import check from "../images/icon-check.svg";

function InnerThree() {
     return (
          <>
               <div className="last-inner-container">
                    <div className="last-inner">
                         <ul className="last-ul">
                              <li className="last-li">
                                   <img src={check} alt="check" /> Unlimited
                                   Websites
                              </li>
                              <li className="last-li">
                                   <img src={check} alt="check" /> 100% data
                                   ownership
                              </li>
                              <li className="last-li">
                                   <img src={check} alt="check" /> Email reports
                              </li>
                         </ul>
                    </div>
                    <div className="last-button">
                         <button className="last-btn">Start my trial</button>
                    </div>
               </div>
          </>
     );
}

export default InnerThree;

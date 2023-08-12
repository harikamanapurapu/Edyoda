import React from "react";
import pay from "../assets/RazorpayIcon.png"
import timeover from "../assets/timeover.png"
import "./Plans.css"
import { useState } from "react";

const Plans =()=>{
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelection = (event) => {
      setSelectedPlan(event.target.value);
    };
  
    const renderTotalAmount = () => {
      let baseAmount = 0;
      if (selectedPlan === "plan1") {
        baseAmount=179; // Change this value based on your logic
      } else if (selectedPlan === "plan2") {
        baseAmount=149; // Change this value based on your logic
      }
      else if (selectedPlan === "plan3") {
        baseAmount=99; // Change this value based on your logic
      }
      const gstPercentage = 18;
      const totalAmount = baseAmount + (baseAmount * gstPercentage) / 100;
      return Math.round(totalAmount);
    };

    return(
        <div className="form">
            <div className="processes">
                <div style={{display:"flex",flexDirection:"column",width: "80px",height: "61px",gap: "4px"}}>
                    <button className="process">1</button>
                    <p className="process-para">Sign Up</p>
                </div>
                <div style={{display:"flex",flexDirection:"column",width: "80px",height: "61px",gap: "4px"}}>
                    <button className="process">2</button>
                    <p className="process-para">Subscribe</p>
                </div>
            </div>
            <p className="selection">Select your subscription plan</p>
            <div>
                <div className="plans">
                    <p className="valid">Offer expired</p>
                    <div className="plan">
                        <input type="radio" className="radio" disabled/>
                        <p className="period">12 Months Subscription</p>
                    </div>
                    <div className="amount">
                        <p className="total-amount">Total  <span className="dis"> ₹ 99</span></p>
                        <p className="months">₹8 <span className="mon">/mo</span></p>
                    </div>
                </div>
                <div className={`plans1 ${selectedPlan === "plan1" ? "selected" : ""}`}>
                    <p className="valid1">Recommended</p>
                    <div className="plan">
                        <input type="radio" className="radio1 custom-radio" name="subscriptionPlan" value="plan1" onChange={handlePlanSelection}/>
                        <p className="period1">12 Months Subscription</p>
                    </div>
                    <div className="amount1">
                        <p className="total-amount1">Total  <span className="dis1"> ₹ 179</span></p>
                        <p className="months1">₹15 <span className="mon1">/mo</span></p>
                    </div>
                </div>
                <div className={`plans1 ${selectedPlan === "plan2" ? "selected" : ""}`}>
                    <div className="plan">
                        <input type="radio" className="radio1 custom-radio" name="subscriptionPlan" value="plan2" onChange={handlePlanSelection}/>
                        <p className="period1">6 Months Subscription</p>
                    </div>
                    <div className="amount1">
                        <p className="total-amount1">Total  <span className="dis1"> ₹ 149</span></p>
                        <p className="months1">₹25 <span className="mon1">/mo</span></p>
                    </div>
                </div>
                <div className={`plans1 ${selectedPlan === "plan3" ? "selected" : ""}`}>
                    <div className="plan" >
                        <input type="radio" className="radio1 custom-radio" name="subscriptionPlan" value="plan3" onChange={handlePlanSelection}/>
                        <p className="period1">3 Months Subscription</p>
                    </div>
                    <div className="amount1">
                        <p className="total-amount1">Total  <span className="dis1"> ₹ 99</span></p>
                        <p className="months1">₹33 <span className="mon1">/mo</span></p>
                    </div>
                </div>
            </div>
            <hr style={{fontSize:"50px",fontWeight:"800px",marginTop:"20px"}}></hr>
            <div className="details">
                <p className="fee">Subscription Fee</p>
                <p className="feeamount">₹18,500</p>
            </div>
            <div className="limitedOfferBox">
                <div className="limitedOffer">
                    <p className="limitText">Limited time offer</p>
                    <div className="limitbox">
                        <img src={timeover} alt="" className="limit"/>
                        <p className="offer">Offer valid till 25th August 2023 </p>
                    </div>
                </div>
                <p className="limitamount">- ₹18,321</p>
            </div>
            <div className="totaldetails">
                <p className="totalfee">Total <span className="gst">(Incl. of 18% GST)</span></p>
                <p className="totalamount">₹{renderTotalAmount()}</p>
            </div>
            <div className="buttons">
                <button className="cancelbtn">CANCEL</button>
                <button className="paybtn">PROCEED TO PAY</button>
            </div>
            <img src={pay} alt="pay" className="pay"/>
        </div>
    )
}
export default Plans;
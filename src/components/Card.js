import React from "react";
import card from "../css/card.css";
import cop from "../media/cop.jpg";
import cop2 from "../media/cop2.jpg";

const Card = () => {
  return (
    <div className="cardWrapper">
      <div className="cardHeader">
        <div className="cardHeaderColOne">
          <img className="cardHeaderThumbNail" src={cop} />
        </div>

        <div className="cardHeaderColTwo">
          <h5>Date</h5>
        </div>

        <div className="cardHeaderColThree">
          <h5>Bludgeoned</h5>
          <h5>Pepper Sprayed</h5>
          <h5>Tear Gassed</h5>
        </div>
      </div>

      <div className="cardBody">
        <div className="cardBodyColOne">
          <h5>Tweet Information</h5>
        </div>

        <div className="cardBodyColTwo">
          <img className="embeddedVideoPlayer" src={cop2} />
        </div>
      </div>

      <div className="cardFooter">
        {" "}
        <h5 className="footerText">Card Footer</h5>
      </div>
    </div>
  );
};

export default Card;

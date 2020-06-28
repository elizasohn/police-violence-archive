import React from "react";
import card from "../css/card.css";
import cop from "../media/cop.jpg";
import ReactPlayer from "react-player";
import { FAKE_DATABASE } from "../constants/FakeDatabase.js";
import {
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Card = () => {

const POSTS = FAKE_DATABASE.posts;

let weirdTwitterDate = POSTS[0].twitterDate;
let year = null;
let month = null;
let day = null;
let actualDate = null;

 const makeTwitterDateReadable = (twitterDate) => {
   twitterDate = twitterDate.match(/.{1,2}/g);
   year = "20" + twitterDate[0]
   day = twitterDate[2]

    if (twitterDate[1] === "01") {
    month = "January"
    }
    if (twitterDate[1] === "02") {
    month = "Febuary";
    }
    if (twitterDate[1] === "03") {
    month = "March";
    }
    if (twitterDate[1] === "04") {
    month = "April";
    }
    if (twitterDate[1] === "05") {
    month = "May";
    }
    if (twitterDate[1] === "06") {
    month = "June";
    }
    if (twitterDate[1] === "07") {
      month = "January";
    }
    if (twitterDate[1] === "08") {
      month = "Febuary";
    }
    if (twitterDate[1] === "09") {
      month = "March";
    }
    if (twitterDate[1] === "10") {
      month = "April";
    }
    if (twitterDate[1] === "11") {
      month = "May";
    }
    if (twitterDate[1] === "12") {
      month = "June";
    }
    actualDate = month + " " + day + ", " + year;
 }

 makeTwitterDateReadable(weirdTwitterDate);

  return (
    <div className="cardWrapper">
      <div className="cardHeader">
        <div className="cardHeaderColOne">
          <img className="cardHeaderThumbNail" src={cop} />
        </div>

        <div className="cardHeaderColTwo">
          <h5>Date: {actualDate}</h5>
          <h5>Time: {POSTS[0].twitterTime}</h5>
          <h5>
            Location: {POSTS[0].city} , {POSTS[0].state}
          </h5>
        </div>

        <div className="cardHeaderColThree">
          <h5>{POSTS[0].text}</h5>
        </div>
      </div>

      <div className="cardBody">
        
        <div className="cardBodyColOne">
          <TwitterTweetEmbed
            tweetId={POSTS[0].tweetURL.split("/")[5]}
            sourceType="profile"
            screenName="HeyMarkKop"
            options={{
              width: "100%",
              height: "100%",
            }}
          ></TwitterTweetEmbed>
        </div>

        <div className="cardBodyColTwo">
          <ReactPlayer
            className="reactPlayer"
            url={POSTS[0].youTube}
            style={{ marginLeft: "10px", marginTop: "10px" }}
          />
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

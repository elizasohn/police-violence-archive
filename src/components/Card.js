import React from "react";
import card from "../css/card.css";
import cop from "../media/cop.jpg";
import cop2 from "../media/cop2.jpg";
import ReactPlayer from "react-player";
import { FAKE_DATABASE } from "../constants/FakeDatabase.js";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";
import { withInheritedProps } from "object-path";




const Card = ( ) => {

  const POSTS = FAKE_DATABASE.posts;
  console.log("POSTS", POSTS[0].tweetURL);


  return (
    <div className="cardWrapper">
      <div className="cardHeader">
        <div className="cardHeaderColOne">
          <img className="cardHeaderThumbNail" src={cop} />
        </div>

        <div className="cardHeaderColTwo">
          <h5>Date: {POSTS[0].twitterDate}</h5>
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
            cards="hidden"
          ></TwitterTweetEmbed>
        </div>

        <div className="cardBodyColTwo">
          <ReactPlayer
            className="reactPlayer"
            url={POSTS[0].youTube}
            style={{ marginLeft: "10px", marginTop: "10px" }}

            // light={true}
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

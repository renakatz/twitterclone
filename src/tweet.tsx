// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/
function Tweet({ username, content, initialLikes }) {
  // state variables
  const [likes, setLikes] = useState(initialLikes || 0);
  const [liked, setLiked] = useState(false);

  // event handler
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="tweet">
      <h2>{username}</h2>
      <p>{content}</p>

      <button onClick={handleLike}>
        {liked ? "❤️" : "🤍"} {likes}
      </button>
    </div>
  );
}



//export default Tweet;

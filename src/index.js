import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const profile = (
  <div>
    <img src={user.avatar} alt="avatar"></img>
    <p>@{user.tag}</p>
    <p>{user.location}</p>
    <ul>
      <li>
        <p>Followers</p>
        {user.stats.followers}
      </li>
      <li>
        <p>Views</p>
        {user.stats.views}
      </li>
      <li>
        <p>Likes</p>
        {user.stats.likes}
      </li>
    </ul>
  </div>
);

ReactDOM.render(profile, document.getElementById("root"));

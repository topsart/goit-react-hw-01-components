import React from "react";
import PropTypes from "prop-types";
import Friend from "./Friend";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id} className="item">
        <Friend avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;

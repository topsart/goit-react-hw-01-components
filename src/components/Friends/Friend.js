import React from "react";
import PropTypes from "prop-types";
import styles from "./Friend.module.css";

const Friend = ({ avatar, name, isOnline }) => (
  <>
    {isOnline ? (
      <span
        style={{ backgroundColor: "green" }}
        className={styles.status}
      ></span>
    ) : (
      <span style={{ backgroundColor: "red" }} className={styles.status}></span>
    )}
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </>
);

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;

import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map((data) => (
        <li key={data.id} className="item">
          <span className="label">{data.label}</span>
          <span className="percentage">{data.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

// Profile.defaultProps = {
//   avatar: "http://simpleicon.com/wp-content/uploads/user1.svg",
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;

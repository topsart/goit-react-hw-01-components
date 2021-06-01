import React from "react";

import Profile from "./components/Profile";
import user from "./user.json";

import Statistics from "./components/Statistics";
import statisticalData from "./statistical-data.json";

const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
    </>
  );
};

export default App;

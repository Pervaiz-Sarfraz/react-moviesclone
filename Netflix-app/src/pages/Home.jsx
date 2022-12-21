import React from "react";
import Movies from "../components/Movies";
import Row from "../components/Row";
import requests from "../Request";

function Home() {
  return (
    <div>
      <Movies />
      <Row rowID="1" title="Upcoming" fetchUrl={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowID="3" title="TopRated" fetchUrl={requests.requestTopRated} />
      <Row rowID="4" title="Horror" fetchUrl={requests.requestHorror} />
      <Row rowID="5" title="Trending" fetchUrl={requests.requestTrending} />
    </div>
  );
}

export default Home;

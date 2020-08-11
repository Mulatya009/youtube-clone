import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer "
        subs="704K"
        noOfVideos={350}
        verified
        description="Clever Programmer is open source - rapidly develop the next generation of ambitious products & services. DAML, an open-source programming language for writing distributed apps quickly & concisely. Scenario-"
      />
      <hr />
      <VideoRow
        views="7.5M"
        subs="705K "
        description="Clever Programmer is open source - rapidly develop the next generation of ambitious products & services. DAML, an open-source programming language for writing distributed apps quickly & concisely. Scenario-"
        timestamp="10 hours ago"
        channel="Clever Programmer"
        title="🔴 Build a Slack Clone in React JS (Realtime chat app using Firebase)"
        image="https://i.ytimg.com/an_webp/Oo4ziTddOxs/mqdefault_6s.webp?du=3000&sqp=COj4yPkF&rs=AOn4CLBFjxfwqgzbQ8nWCtlegy7qZJBtyA"
      />

      <VideoRow
        views="7.5M"
        subs="705K "
        description="Clever Programmer is open source - rapidly develop the next generation of ambitious products & services. DAML, an open-source programming language for writing distributed apps quickly & concisely. Scenario-"
        timestamp="10 hours ago"
        channel="Clever Programmer"
        title="🔴 Build a Slack Clone in React JS (Realtime chat app using Firebase)"
        image="https://i.ytimg.com/an_webp/Oo4ziTddOxs/mqdefault_6s.webp?du=3000&sqp=COj4yPkF&rs=AOn4CLBFjxfwqgzbQ8nWCtlegy7qZJBtyA"
      />
      <VideoRow
        views="7.5M"
        subs="705K "
        description="Clever Programmer is open source - rapidly develop the next generation of ambitious products & services. DAML, an open-source programming language for writing distributed apps quickly & concisely. Scenario-"
        timestamp="10 hours ago"
        channel="Clever Programmer"
        title="🔴 Build a Slack Clone in React JS (Realtime chat app using Firebase)"
        image="https://i.ytimg.com/an_webp/Oo4ziTddOxs/mqdefault_6s.webp?du=3000&sqp=COj4yPkF&rs=AOn4CLBFjxfwqgzbQ8nWCtlegy7qZJBtyA"
      />
      <VideoRow
        views="7.5M"
        subs="705K "
        description="Clever Programmer is open source - rapidly develop the next generation of ambitious products & services. DAML, an open-source programming language for writing distributed apps quickly & concisely. Scenario-"
        timestamp="10 hours ago"
        channel="Clever Programmer"
        title="🔴 Build a Slack Clone in React JS (Realtime chat app using Firebase)"
        image="https://i.ytimg.com/an_webp/Oo4ziTddOxs/mqdefault_6s.webp?du=3000&sqp=COj4yPkF&rs=AOn4CLBFjxfwqgzbQ8nWCtlegy7qZJBtyA"
      />
      <VideoRow
        views="7.5M"
        subs="705K "
        description="Clever Programmer is open source - rapidly develop the next generation of ambitious products & services. DAML, an open-source programming language for writing distributed apps quickly & concisely. Scenario-"
        timestamp="10 hours ago"
        channel="Clever Programmer"
        title="🔴 Build a Slack Clone in React JS (Realtime chat app using Firebase)"
        image="https://i.ytimg.com/an_webp/Oo4ziTddOxs/mqdefault_6s.webp?du=3000&sqp=COj4yPkF&rs=AOn4CLBFjxfwqgzbQ8nWCtlegy7qZJBtyA"
      />
      <VideoRow
        views="7.5M"
        subs="705K "
        description="Clever Programmer is open source - rapidly develop the next generation of ambitious products & services. DAML, an open-source programming language for writing distributed apps quickly & concisely. Scenario-"
        timestamp="10 hours ago"
        channel="Clever Programmer"
        title="🔴 Build a Slack Clone in React JS (Realtime chat app using Firebase)"
        image="https://i.ytimg.com/an_webp/Oo4ziTddOxs/mqdefault_6s.webp?du=3000&sqp=COj4yPkF&rs=AOn4CLBFjxfwqgzbQ8nWCtlegy7qZJBtyA"
      />
      <VideoRow
        views="7.5M"
        subs="705K "
        description="Clever Programmer is open source - rapidly develop the next generation of ambitious products & services. DAML, an open-source programming language for writing distributed apps quickly & concisely. Scenario-"
        timestamp="10 hours ago"
        channel="Clever Programmer"
        title="🔴 Build a Slack Clone in React JS (Realtime chat app using Firebase)"
        image="https://i.ytimg.com/an_webp/Oo4ziTddOxs/mqdefault_6s.webp?du=3000&sqp=COj4yPkF&rs=AOn4CLBFjxfwqgzbQ8nWCtlegy7qZJBtyA"
      />
    </div>
  );
}

export default SearchPage;

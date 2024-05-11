import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/contextApi";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import LeftNav from "./Components/LeftNav";
import LeftNavMenuItem from "./Components/LeftNavMenuItem";
import SearchResult from "./Components/SearchResult";
import SearchResultVideoCard from "./Components/SearchResultVideoCard";
import SuggestionVideoCard from "./Components/SuggestionVideoCard";
import VideoCard from "./Components/VideoCard";
import VideoDetails from "./Components/VideoDetails";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route
              path="/searchResult/:serachQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;

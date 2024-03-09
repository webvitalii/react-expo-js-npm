import React, { useState } from "react";
import CardList from "../../components/card-list/card-list.component";
import SearchBoxBtn from "../../components/SearchBoxBtn/SearchBoxBtn";
import youtubeApi from "../../apis/youtube.api";

const YoutubePage = () => {
  const [videoList, setVideoList] = useState([]);

  const onSearchChange = async (searchTerm) => {
    const response = await youtubeApi.get("/search", {
      params: { q: searchTerm },
    });

    const itemsPrepared = response.data?.items?.map((item) => {
      return {
        id: item?.id?.videoId,
        title: item?.snippet?.title,
        description: item?.snippet?.description,
        imgUrl: item?.snippet?.thumbnails?.medium?.url,
      };
    });

    setVideoList(itemsPrepared);
  };

  return (
    <section className="youtube-page">
      <h3>Youtube video search: {videoList.length} results</h3>
      <SearchBoxBtn handleClick={onSearchChange} />
      <CardList list={videoList} />
    </section>
  );
};

export default YoutubePage;

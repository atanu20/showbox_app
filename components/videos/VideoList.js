import React from 'react';
import TrendingVideo from '../slider/TrendingVideo';
import CardVideo from './CardVideo';

const VideoList = ({ allvideo, trendVideo }) => {
  console.log(trendVideo)
  return (
    <>
      <div className="video_list">
        {
          trendVideo.length > 0 && <TrendingVideo trendVideo={trendVideo} />
        }
        <br />
        <CardVideo allvideo={allvideo} />
      </div>
    </>
  );
};

export default VideoList;

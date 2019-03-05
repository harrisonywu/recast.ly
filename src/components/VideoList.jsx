
// import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((vid) => 
      <VideoListEntry key={vid.id.videoId} video={vid}/>
    )}
    {/* <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div> */}
  </div>
);

// console.log(exampleVideoData);
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


//Refactor the videolist to dynamic rendering
//INPUTS: array of objects (videos)
//OUTPUTS: each video in its own html tag
// no constraints or edge cases

//justification: take mock data and render each one individually (as a video list entry), and attach them to our video list
// explanation: we'll take our array of objects and do a forEach/for loop/map on each object and send it to video list entry.
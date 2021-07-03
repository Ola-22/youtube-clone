import { TuneOutlined } from "@material-ui/icons";
import "./style.css";
import ChannelRow from "../ChannelRow";
import VideoRow from "../ChannelRow/VideoRow";

export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="/images/clever.jpg"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        image="/images/clone.jpg"
      />

      <VideoRow
        views="281K"
        subs="977K"
        description="Do you want to master React JS & learn how to make an income with your new skills? 👉 Click here & enroll NOW 🔥https://www.cleverprogrammer.com/pwj?..."
        timestamp="11 months ago"
        channel="Clever Programmer"
        title="🔴 How to Build a NETFLIX Clone with REACT JS for Beginners (in 3 Hours!)"
        image="/images/clone.jpg"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        image="/images/clone.jpg"
      />
    </div>
  );
}

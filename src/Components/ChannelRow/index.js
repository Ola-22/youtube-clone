import "./style.css";
import { Avatar } from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";

export default function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutline />}
        </h4>
        <p>
          {subs} subscribers * {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

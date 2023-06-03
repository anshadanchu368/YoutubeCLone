import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { VideoStableSharp } from "@mui/icons-material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            zIndex: !0,
            height: "300px",
            background: "rgb(2,0,36)",
            background:
              "linear-gradient(294deg, rgba(2,0,36,1) 0%, rgba(9,20,121,1) 28%, rgba(0,212,255,1) 86%)",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        
      </Box>
      <Box display="flex" p="1">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;

import {Box,Stack,Typography} from '@mui/material'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] =useState(null);
  const { id} =useParams();

   useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=>setVideoDetail(data.items[0]))
   },[id])

   const title = videoDetail?.snippet?.title;

  return (
     <Box minHeight="95vh">
       <Stack direction={{xs: 'column' ,md:'row'}}>
          <Box flex={1}>
              <Box sx={{width: '100%' ,position: 'sticky',top:'86px'}}>
                  <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
                  {title && (

                  <Typography color="white" variant="h5" fontweight="bold" p={2}>
                    {title}
                  </Typography>

                  )}
              </Box>
          </Box>
       </Stack>
     </Box>
  )
}

export default VideoDetail

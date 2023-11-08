import VideoPlayer from './VideoPlayer';
import VideoDescription from './VideoDescription';
import { useParams } from 'react-router-dom';
import { useGetVideoQuery } from './../features/api/apiSlice';
import PlayerSkeleton from './ui/loaders/PlayerSkeleton';
import Error from './ui/Error';

export default function PlayerContainer() {
   const { id } = useParams();
   const { data: video, isLoading, isError } = useGetVideoQuery(id);

   if (isLoading) return <PlayerSkeleton />;
   if (isError) return <Error />;
   if (!video.id) return <Error message="Video Not Found" />;

   return (
      <>
         <VideoPlayer link={video.link} title={video.title} />
         <VideoDescription video={video} />
      </>
   );
}

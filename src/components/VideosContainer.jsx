import { useGetVideosQuery } from '../features/api/apiSlice';
import Error from './ui/Error';
import VideoSkeleton from './ui/loaders/VideoSkeleton';
import VideoItem from './VideoItem';

export default function VideosContainer() {
   const { data: videos, isLoading, isError } = useGetVideosQuery();

   if (isLoading) return <VideoSkeleton />;
   if (isError) return <Error />;
   if (videos.length <= 0) return <Error message="No videos Found" />;

   return videos.map((video) => <VideoItem key={video.id} video={video} />);
}

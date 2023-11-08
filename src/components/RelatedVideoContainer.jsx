import { useParams } from 'react-router-dom';
import {
   useGetRelatedVideosQuery,
   useGetVideoQuery,
} from '../features/api/apiSlice';
import RelatedVideoSkeleton from './../components/ui/loaders/RelatedVideoSkeleton';
import RelatedVideoItem from './RelatedVideoItem';
import { useEffect, useState } from 'react';
import Error from './ui/Error';

export default function RelatedVideoContainer() {
   const [relatedFetch, setRelatedFetch] = useState(true);
   const { id } = useParams();
   const { data: video, isLoading: videoLoading } = useGetVideoQuery(id);
   const {
      data: relatedVideos,
      isLoading,
      isError,
   } = useGetRelatedVideosQuery(
      { id, title: video ? video.title : '' },
      {
         skip: relatedFetch,
      }
   );

   useEffect(() => {
      if (video?.id) {
         setRelatedFetch(false);
      }
   }, [video?.id]);

   if (videoLoading || isLoading) return <RelatedVideoSkeleton />;
   if (isError) return <Error />;
   if (relatedVideos?.length <= 0) return <Error message={'No Videos'} />;

   return relatedVideos?.map((video) => (
      <RelatedVideoItem key={video.id} video={video} />
   ));
}

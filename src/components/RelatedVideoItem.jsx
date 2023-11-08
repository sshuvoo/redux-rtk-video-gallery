/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function RelatedVideoItem({ video }) {
   return (
      <div className="w-full flex flex-row gap-2 mb-4">
         <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
            <Link to={`/watch/${video.id}`}>
               <img
                  src={video.thumbnail}
                  className="object-cover"
                  alt={video.title}
               />
            </Link>
            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
               {video.views}
            </p>
         </div>

         <div className="flex flex-col w-full">
            <Link to={`/watch/${video.id}`}>
               <p className="text-slate-900 text-sm font-semibold">
                  {video.title}
               </p>
            </Link>
            <Link
               to={`/watch/${video.id}`}
               className="text-gray-400 text-xs mt-2 hover:text-gray-600"
               href="#"
            >
               {video.author}
            </Link>
            <p className="text-gray-400 text-xs mt-1">
               {video.views} views . {video.date}
            </p>
         </div>
      </div>
   );
}

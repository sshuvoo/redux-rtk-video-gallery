import { useEffect, useState } from 'react';
import Success from './ui/Success';
import Error from './ui/Error';
import {
   useGetVideoQuery,
   useUpdateVideoMutation,
} from '../features/api/apiSlice';
import { useParams } from 'react-router-dom';

export default function UpdateVideoForm() {
   const { id } = useParams();
   const {
      data: editVideo,
      isLoading: isLoadingEdit,
      isError: isErrorEdit,
      isSuccess: isSuccessEdit,
   } = useGetVideoQuery(id);
   const [updateVideo, { isLoading, isError, isSuccess }] =
      useUpdateVideoMutation();

   const [title, setTitle] = useState('');
   const [thumbnail, setThumbnail] = useState('');
   const [link, setLink] = useState('');
   const [author, setAuthor] = useState('');
   const [date, setDate] = useState('');
   const [duration, setDuration] = useState('');
   const [views, setViews] = useState('');
   const [description, setDescription] = useState('');

   const submitHandler = (event) => {
      event.preventDefault();
      updateVideo({
         id,
         title,
         thumbnail,
         link,
         author,
         date,
         duration,
         views,
         description,
      });
   };

   useEffect(() => {
      if (isSuccessEdit && editVideo?.id) {
         const {
            title,
            author,
            date,
            description,
            duration,
            link,
            views,
            thumbnail,
         } = editVideo;

         setTitle(title);
         setAuthor(author);
         setDate(date);
         setDescription(description);
         setDuration(duration);
         setLink(link);
         setViews(views);
         setThumbnail(thumbnail);
      }
   }, [isSuccessEdit, editVideo]);

   if (isLoadingEdit) return <Success message={'Loading...'} />;
   if (isErrorEdit) return <Error />;

   return (
      <div className="mt-5 md:mt-0 md:col-span-2">
         <form onSubmit={submitHandler}>
            <div className="shadow overflow-hidden sm:rounded-md">
               <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                     <div className="col-span-6 sm:col-span-3">
                        <label
                           htmlFor="first-name"
                           className="block text-sm font-medium text-gray-700"
                        >
                           Title
                        </label>
                        <input
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           type="text"
                           name="first-name"
                           id="first-name"
                           autoComplete="given-name"
                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                     </div>

                     <div className="col-span-6 sm:col-span-3">
                        <label
                           htmlFor="last-name"
                           className="block text-sm font-medium text-gray-700"
                        >
                           Author
                        </label>
                        <input
                           value={author}
                           onChange={(e) => setAuthor(e.target.value)}
                           type="text"
                           name="last-name"
                           id="last-name"
                           autoComplete="family-name"
                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                     </div>

                     <div className="col-span-6">
                        <label
                           htmlFor="about"
                           className="block text-sm font-medium text-gray-700"
                        >
                           Description
                        </label>
                        <div className="mt-1">
                           <textarea
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              id="about"
                              name="about"
                              rows="3"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                           />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                           Brief description for your video
                        </p>
                     </div>

                     <div className="col-span-6">
                        <label
                           htmlFor="email-address"
                           className="block text-sm font-medium text-gray-700"
                        >
                           YouTube Video Link
                        </label>
                        <input
                           value={link}
                           onChange={(e) => setLink(e.target.value)}
                           type="text"
                           name="email-address"
                           id="email-address"
                           autoComplete="email"
                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                     </div>

                     <div className="col-span-6">
                        <label
                           htmlFor="street-address"
                           className="block text-sm font-medium text-gray-700"
                        >
                           Thumbnail link
                        </label>
                        <input
                           value={thumbnail}
                           onChange={(e) => setThumbnail(e.target.value)}
                           type="text"
                           name="street-address"
                           id="street-address"
                           autoComplete="street-address"
                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                     </div>

                     <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                           htmlFor="city"
                           className="block text-sm font-medium text-gray-700"
                        >
                           Date
                        </label>
                        <input
                           value={date}
                           onChange={(e) => setDate(e.target.value)}
                           type="text"
                           name="city"
                           id="city"
                           autoComplete="address-level2"
                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                     </div>

                     <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                           htmlFor="region"
                           className="block text-sm font-medium text-gray-700"
                        >
                           Duration
                        </label>
                        <input
                           value={duration}
                           onChange={(e) => setDuration(e.target.value)}
                           type="text"
                           name="region"
                           id="region"
                           autoComplete="address-level1"
                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                     </div>

                     <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                           htmlFor="postal-code"
                           className="block text-sm font-medium text-gray-700"
                        >
                           Views
                        </label>
                        <input
                           value={views}
                           onChange={(e) => setViews(e.target.value)}
                           type="text"
                           name="postal-code"
                           id="postal-code"
                           autoComplete="postal-code"
                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                     </div>
                  </div>
               </div>
               <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                     disabled={isLoading}
                     type="submit"
                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                  >
                     Save
                  </button>
               </div>
               {isSuccess && <Success message="Video update Successfully" />}
               {isError && <Error />}
            </div>
         </form>
      </div>
   );
}

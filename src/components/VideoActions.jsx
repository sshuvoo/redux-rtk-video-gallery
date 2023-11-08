/* eslint-disable react/prop-types */
import editIcon from './../assets/edit.svg';
import deleteIcon from './../assets/delete.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDeleteVideoMutation } from '../features/api/apiSlice';
import { useEffect } from 'react';

export default function VideoActions({ id }) {
   const [deleteVideo, { isLoading, isSuccess }] = useDeleteVideoMutation();
   const navigate = useNavigate();

   useEffect(() => {
      if (isSuccess) navigate('/');
   }, [isSuccess, navigate]);

   return (
      <div className="flex gap-10 w-48">
         <div className="flex gap-1">
            <div className="shrink-0">
               <img className="w-5 block" src={editIcon} alt="Edit" />
            </div>
            <Link
               to={`/update-video/${id}`}
               className="text-sm leading-[1.7142857] text-slate-600"
            >
               Edit
            </Link>
         </div>
         <div className="flex gap-1">
            <div className="shrink-0">
               <img className="w-5 block" src={deleteIcon} alt="Delete" />
            </div>
            <button
               disabled={isLoading}
               onClick={() => deleteVideo(id)}
               className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer"
            >
               Delete
            </button>
         </div>
      </div>
   );
}

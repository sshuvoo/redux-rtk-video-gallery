import PlayerContainer from '../components/PlayerContainer';
import RelatedVideoContainer from '../components/RelatedVideoContainer';

export default function PlayerPage() {
   return (
      <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
         <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
               <div className="col-span-full w-full space-y-8 lg:col-span-2">
                  <PlayerContainer />
               </div>
               <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
                  <RelatedVideoContainer />
               </div>
            </div>
         </div>
      </section>
   );
}

import { useParams } from "react-router"
import {useQuery} from "@apollo/client";
import { GET_CHARACTER_BYID } from "../../queries";
import CharacterCard from "../../components/CharacterCard";
function Detail(){

    let favs = localStorage.getItem('fav')
    favs = JSON.parse(favs)
    let {id} = useParams()
    
    const {loading,data}= useQuery(GET_CHARACTER_BYID,{
        variables:{id:id}
    })
    if(loading) return <div>Loding bre</div>
    const result = data.character

    
    return(
        <div className={result.episode.length>5? 'container flex flex-col py-10 content-center bg-rm-bluesky-pale h-full' : 'container flex flex-col py-10 content-center bg-rm-bluesky-pale h-screen '
        }>
            <CharacterCard id={id} favs={favs} />
            <div className='flex flex-col mx-auto w-11/12 mb-10'>
                <h1 className='my-3 content-center text-rm-navy-pale font-semibold text-md ml-6'>APPEARED ON:</h1>
                <div className='flex flex-wrap justify-evenly'>

                {result?.episode.map(ep=>{
                    return(
                        <div key={ep.episode} className='rounded-lg flex flex-col bg-rm-orange w-36 my-2 flex-initial p-2'>
                            <p className='mt-2 text-rm-navy-pale text-sm'>
                                {ep.episode}
                            </p>
                            <h1 className='mt-2 text-white text-md font-semibold'>
                                {ep.name}                        
                            </h1>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Detail
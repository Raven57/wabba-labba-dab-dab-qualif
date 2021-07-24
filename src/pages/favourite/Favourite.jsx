import CharacterCard from "../../components/CharacterCard"
import {useQuery} from "@apollo/client";
import { GET_CHARACTER_BYID } from "../../queries";

function Favourite(){
    
    let favs = localStorage.getItem('fav')
    favs = JSON.parse(favs)
    
    return(
        <div className='flex flex-col bg-rm-orange h-full'>
            {!favs &&
            <h1 className='pt-80 text-center h-screen text-white text-3xl font-semibold'>
            Favourite is empty!                      
        </h1>}
            {favs?.map(fav=>{
                return (
                    <div className='my-4'>
                        <CharacterCard id={fav} favs={favs} />
                    </div>

                )
            })

            }
            </div>
    )
}

export default Favourite
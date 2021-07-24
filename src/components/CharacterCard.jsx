import { StarIcon } from "@heroicons/react/solid";
import React,{useState} from "react";
import {useQuery} from "@apollo/client";
import { GET_CHARACTER_BYID } from "../queries";

function CharacterCard(props){
    const id = props.id
    let favs = props.favs
    const index = favs?.indexOf(parseInt(id));
    const [status,setStatus] = useState(favs?.includes(parseInt(id)));

    
    const {loading,data}= useQuery(GET_CHARACTER_BYID,{
        variables:{id:id}
    })
    if(loading) return <div>Loding bre</div>
    const result = data.character

    const handleBtn = () =>{
        if(status==1){
            //hapus 
            favs.splice(index, 1);
            localStorage.setItem('fav',JSON.stringify(favs))
            setStatus(0)
        }else{
            //tmbh
            favs.push(parseInt(id))
            localStorage.setItem('fav',JSON.stringify(favs))
            setStatus(1)
        }
    }
    return (
        <div className='w-10/12 container rounded-xl mx-auto  bg-rm-tosca text-rm-navy content-around'>
        {/* ATAS */}
        <div className='flex flex-initial flex-row  pt-4  justify-evenly content-center'>
            <img src={result.image} className='flex-inline w-28 h-28 rounded-md m-0'/>
            <div className='flex flex-col w-40 '>
                <h1 className='text-xl font-semibold '>{result.name}</h1>
                <h2 className='mt-2 text-rm-navy-pale text-md'>{result.location.type+' '+result.location.name}</h2>
            </div>
        </div>
        <div className='mt-2 flex flex-row flex-wrap justify-evenly font-bold  text-rm-green text-lg'>
            <p>{result.gender}</p>
            <p>{result.species}</p>
            <p>{result.status}</p>
            <p>{result.type}</p>
        </div>
        <p className='mt-2 ml-8 '>ORIGIN</p>
        <div className='ml-8 my-2 flex justify-between'>
            <div className='flex flex-col justify-center text-left'>
                <p>{result.origin.name}</p>
                <p>{result.origin.dimension}</p>
            </div>
            {status==1 &&
                <button onClick={handleBtn}>
                    <StarIcon className='text-rm-pink w-14 mr-3'/>
                </button>
            }
            {status!=1&&
                <button onClick={handleBtn}>
                    <StarIcon className='text-rm-pink-pale w-14 mr-3'/>
                </button>
            }
        </div>
    </div>
    )
}
export default CharacterCard
import React,{useState,useEffect} from "react";
import {useLazyQuery } from "@apollo/client";
import CardItem from "../../components/CardItem"
import { GET_CHARACTER_BYNAME } from "../../queries";

function Search(){
    const [getRes, { loading,data }] = useLazyQuery(GET_CHARACTER_BYNAME);
    const [res,setRes] = useState();
    useEffect(()=>{
        if(data) setRes(data.characters.results)
        console.log(res)
    })
    // if(loading) return <div>LODING BRO</div>
    const x = res?res:null
    return(
        <React.Fragment>
        {/* <BottomScrollListener onBottom={handleOnDocumentBottom} /> */}

        <div  className={x?.length>5? 'container flex flex-col py-10 content-center bg-rm-red-pale h-full' : 'container flex flex-col py-10 content-center bg-rm-red-pale h-screen '}>
           
            <input className='flex h-16 w-4/5 mx-auto '  type='text' onChange={event=>getRes({ variables: { name: event.target.value } })} />
            {x?.map(result=>{
                    return (
                        <div className='pt-10 container flex flex-wrap justify-around '>
                            <CardItem key={result.id} char={result} />
                        </div>
                            
                    )
                })}
        </div>
        </React.Fragment>
    )
}

export default Search
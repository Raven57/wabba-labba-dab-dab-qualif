import CardItem from "../../components/CardItem"
import {useQuery} from "@apollo/client";
import { QUERY_RANDOM_PAGE_CHARACTER } from "../../queries";
import React, { useState } from 'react';

function List(){
    const [page,setPage] = useState(Math.floor(Math.random() * 50));
    // let pg = Math.floor(Math.random() * 100)
    let pg = page
    console.log(pg)
    const {loading,data}= useQuery(QUERY_RANDOM_PAGE_CHARACTER,{
        // variables:{page:1}
        variables:{page:parseInt(pg)}
    })
    
    if(loading) return <div>Loding bre</div>
    //TODO: GANTI LODING BRE

    const results = data.characters.results
    return(
        // TODO: Kasi atasnya bisa ganti kategori?, kalo sampe bawah dia load lagi (lazy load)
        <div className='pt-10 container flex flex-wrap justify-around bg-rm-navy' >
            {results?.map(result=>{
                return (
                    <CardItem key={result.id} char={result} />
                )
            })}
            </div>
    )
}

export default List
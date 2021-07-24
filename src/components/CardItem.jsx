import { Link } from "react-router-dom"

function CardItem(props){
    // console.log(props)
    return(
        <div className='flex flex-col'>
            <Link to={`/detail/${props.char.id}`}>
            <img className='w-36 h-36 rounded-xl  ' src={props.char.image}/>
            </Link>
            <div className='w-36 h-auto mt-3 mb-6 '>
                <h3 className='text-gray-200 text-sm'>
                    {props.char.origin.dimension}
                </h3>
                <h1 className='text-xl font-semibold text-white'>
                    {props.char.name}
                </h1>
            </div>
            </div>
    )
}
 
export default CardItem
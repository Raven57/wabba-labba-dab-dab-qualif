import {gql} from "@apollo/client"
export const QUERY_RANDOM_PAGE_CHARACTER = 
gql`query listCharacters($page:Int!){
    characters(page:$page){
      info{
        pages,
        next,
      },
      results{id,
        name,image,origin{id,
          dimension,
        }
      }
    }
  }` 

export const GET_CHARACTER_BYID = gql`query getCharacter($id:ID!){
    character(id:$id){
      name,
      status,
      species,
      type,
      gender,
      origin{
        name,type,dimension
      },
        location{
        name,type,dimension
      },
      image,
      episode{
        name,air_date,episode
      }
    }
  }`

export const GET_CHARACTER_BYNAME = gql`
query searchChar($name:String!){
    characters(filter:{name:$name}){
      info{
        count,
        next
      },
      results{id,
        name,image,origin{
          dimension,
        }
      }
    }
  }
`
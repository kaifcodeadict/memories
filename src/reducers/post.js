import { FETCH_ALL,CREATE,UPDATE,DELETE } from "../constants/actionsTypes";


const post =   (post=[],action) => {
    
    switch (action.type) {
        case FETCH_ALL:
           return action.payload;                         
        case CREATE:
           return [...post,action.payload]                         
        case UPDATE:
           return post.map((pos) => (pos._id === action.payload._id ?action.payload  : pos))                         
           case DELETE:
              return post.filter((pos) => (pos._id !== action.payload))                         
           
    
        default:
            return post
    }
}

export default post

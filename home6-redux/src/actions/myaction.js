import { REQ_POSTS,SUC_POSTS,ERR_POSTS,REQ_POST,SUC_POST,ERR_POST} from "../constants"
const myAction={
    getPosts:()=>(dispatch, getState)=>{
            fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(res=>res.json())
            .then(res=>{
                dispatch({
                    type:SUC_POSTS,
                    data:res
                })
            })     
    },
    getRequestDATA:(url)=>(dispatch, getState)=>{
        dispatch({
            type:"PROMISE",
            actions:[REQ_POSTS,SUC_POSTS,ERR_POSTS],
            promise: fetch(url).then(res=>res.json())
        })
    },
    getRequestDATA1:(url)=>(dispatch, getState)=>{
        dispatch({
            type:"PROMISE",
            actions:[REQ_POST,SUC_POST,ERR_POST],
            promise: fetch(url).then(res=>res.json())
        })
    }
}

export default myAction;
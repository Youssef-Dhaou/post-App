import { ADDPOST, DELETEPOST, EDITPOST, STATUS, VERIFIEDPOST } from "../Constants/actionTypes"


export const addPost=(newPost)=>{
    return {type: ADDPOST, payload:newPost}
}

export const deletePost=(id)=>{
    return {type: DELETEPOST, payload:id}
}

export const editPost=(id, title, content)=>{
    return {type: EDITPOST, payload:{id, content, title}}
}




export const verifiedPost=(id)=>{
    return {type: VERIFIEDPOST, payload:id}
}

export const statusPost=(status)=>{
    return {type: STATUS, payload:status}
}


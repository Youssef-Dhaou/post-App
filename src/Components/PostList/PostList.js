import React from 'react'
import Posts from '../Posts/Posts'
import { useSelector } from "react-redux";

const PostList = () => {

    const posts = useSelector(state=> state.PostReducer.posts)
    const status = useSelector(state=> state.PostReducer.status)
  return (
    <div style={{ display:"flex", justifyContent:"space-evenly"}}>

        {status==="ALL" ? posts.map((post)=> <Posts key={post.id} post={post}/>):
        status==="COMPLETED"? posts.filter(el=>el.isVerified).map((post)=> <Posts key={post.id} post={post}/>):
        posts.filter(el=>!el.isVerified).map((post)=> <Posts key={post.id} post={post}/>)}
    </div>
  )
}

export default PostList
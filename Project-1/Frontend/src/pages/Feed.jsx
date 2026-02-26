import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Feed = () => {
    const [posts,setPosts] = useState([
        {
            _id:"1",
            image:"https://images.pexels.com/photos/15948483/pexels-photo-15948483.jpeg",
            caption:"Beautiful scenery",
        }
    ]);

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })

    },[])

  return (
    <section className='feed-section'>
            {
                posts.length > 0 ?(
                    posts.map((post)=>(
                        <div key = {post._id} className='post-card'>
                            <img src={post.image} alt="post.image" />
                            <p>{post.caption}</p>
                        </div>

                    ))
                ) : (
                    <h1>No post available</h1>
                )
            }


    </section>
  )
}

export default Feed

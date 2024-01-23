import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Share from './Share';
import axios from "axios";
import Post from "./Post";
import { useSelector } from 'react-redux';

const Feedd = styled.div`
  flex: 5.5;
`

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user.userInfo);
console.log(user,"i am user");  

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("https://redux-server-chi.vercel.app/api/posts/timeline");
      setPosts(res.data.sort((p1, p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }));
    };
    fetchPosts(); 
  }, [username, user._id]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const res = username 
  //         ? await axios.get("/api/posts/profile/" + username)
  //         : await axios.get("/posts/timeline/" + user._id);
  
  //       // Ensure that res.data is an array
  //       if (Array.isArray(res.data)) {
  //         // Sort the array
  //         setPosts(res.data.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt)));
  //       } else {
  //         console.error("Received data is not an array:", res.data);
  //         // Handle the case where res.data is not an array
  //       }
  //     } catch (error) {
  //       console.error("Error fetching posts:", error);
  //       // Handle the error as needed
  //     }
  //   };
  
  //   fetchPosts();
  // }, [username, user._id]);

  return (
    <Feedd>
        {(!username || username === user.username) && <Share />}
        {
          posts.map(item=>(
            <Post item={item} key={item._id}/>
          ))
        }
    </Feedd>
  )
}

export default Feed

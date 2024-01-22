// import React from 'react';
// import { useSelector } from 'react-redux';

// const Home = () => {
//   const user = useSelector((state) => state.user.userInfo);
//   console.log(user);

//   return (
//     <div>
//       <span>home</span>
//       <span>{user.email} </span>
//       <span>yo </span>
//       <h1>{user.username} </h1>
//       <h1>{user.password} </h1>
//     </div>
//   );
// };

// export default Home;
import React from 'react'
import Feed from '../../components/Feed'
import styled from 'styled-components'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import Rightbar from '../../components/Rightbar'

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
`

function Home() {
  return (
    <div>
      <Topbar/>
      <HomeContainer>
        <Sidebar/>
        <Feed/>
        <Rightbar/> 
      </HomeContainer>
    </div>
  )
}

export default Home


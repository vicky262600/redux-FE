import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import styled from 'styled-components';
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';


const Bar = styled.div`
  border: none;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  // flex-direction: column;
  // align-items: center;
  background-color: #1877f2;
  position: sticky;
  top: 0;
  color: white;
`
const Left = styled.div`
flex: 1.2;

`
const Tital = styled.h1`
  margin-left: 20px;
  font-size: 27px;
  font-weight: bold;
  cursor: pointer;
`
  const Center = styled.div`
  align-items: center;
  // background-color: white; 
  // height: 100%;
  display: flex;
  flex: 2.8;
  flex-direction: row;
  justify-content: center;
`
  const Searrchbar = styled.div`
  color: black;
  background-color: white;
  width: 65%;
  border-radius: 15px;
  border: 1px solid white;
  display: flex;
  align-itmes: center;
`
const Input = styled.input`
  border: none;
`
const Heading = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-left: 25px;
`
const Text = styled.p`
  cursor: pointer;
  `
const Right = styled.div`
  flex: 1.2;
  align-items: right;
`
  const Icons = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 20px;
  cursor: pointer;
  justify-content: flex-end;
  `
  const PersonDiv = styled.div`
    position: relative;
    `
    const MessageDiv = styled.div`
    position: relative;
    `
    const NotificationDiv = styled.div`
    position: relative;
    
    `
    const Span = styled.span`
    font-size:12.5px;
    width: 13px;
    height: 13px;
    position: absolute;
    border: none;
    border-radius: 50%;
    background-color: red;
    top: -5px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const Profile = styled.img`
  background-color: white;
  height: 27px;
  width: 27px;
  border-radius: 50%;
  border: 1px solide black;
  // background: url("https://user-images.githubusercontent.com/145147066/272936528-c4072f24-deb4-4cd7-b4b1-2f8e9a9f90d7.jpg");
  background-size: cover;
  `
  
const Topbar = () => {
  const user = useSelector((state) => state.user.userInfo);
  return (
    <Bar>
        <Left>
            <Tital>RIRAsocial</Tital>
        </Left>
        <Center>
          <Searrchbar>
            <SearchIcon/>
            <Input placeholder='search' />
          </Searrchbar>
          <Heading>
           <Text>Homepage</Text>
           <Text>Timeline</Text>
          </Heading>
        </Center>
        <Right>
          <Icons>
            <PersonDiv>
              <PersonIcon/>
              <Span>1</Span>
            </PersonDiv>
            <MessageDiv>
              <MessageIcon/>
              <Span>2</Span>
            </MessageDiv>
            <NotificationDiv>
              <NotificationsIcon/>
              <Span>1</Span>
            </NotificationDiv>
              <Profile src={user.profilePicture ? user.profilePicture : "https://peach-advisory-zebra-318.mypinata.cloud/ipfs/QmT64bZ8iGeqwwvng1HsbTWvmPSB8SDagqMecYycRhCP8f"}/>            
          </Icons>
        </Right>
    </Bar>
  )
}

export default Topbar

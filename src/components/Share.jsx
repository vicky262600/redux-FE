import React, {  useState, useRef} from 'react';
import styled from 'styled-components';
import PermMediaTwoToneIcon from '@mui/icons-material/PermMediaTwoTone';
import LabelTwoToneIcon from '@mui/icons-material/LabelTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone'; 
import axios from "axios";
import { storage } from "../firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import CancelIcon from '@mui/icons-material/Cancel';
import { useSelector } from 'react-redux';


const Sharee = styled.div`
    width: 100%;
    // height: 160px;
    margin-top: 15px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
    box-shadow: 0px 0px 16px -8px rgba(0,0,0,0.68);
`
const Sharewraper = styled.div`
    padding: 15px;
`
const Text = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
`
const Image = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`
const Input = styled.input`
border: none;
padding: 10px;
`
const InputPhoto = styled.input`

`
const Hr = styled.hr`
    margin-top: 20px;
    color: lightgray;
`
const Media = styled.form`
    display: flex;
    padding: 15px;
    justify-content: space-between;
    `
const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 45px;
`
const Span = styled.span`
    margin-left: 10px;
`
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`
const Button = styled.button`
    font-weight: bold;
    color: white;
    cursor: pointer;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: red;
`
const Icon1 = styled.label`
    cursor: pointer;  
`
const Shareimgcon = styled.div`
padding: 0 20px 10px 20px;
position: relative;
`
const Imgg = styled.img`
width: 100%;
object-fit: cover;
`
const Share = () => {
    const user = useSelector((state) => state.user.userInfo);
    const [file, setFile] = useState(null);
    const storageRef = ref(storage, 'image/');
    const desc = useRef();
    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }   
            if (file) {
                const imageRef = ref(storage, `image/${Date.now() + file.name}`);
                const metadata = {
                  customMetadata: {
                    timestamp: new Date().toISOString(),
                  },
                };
            
                try {
                  await uploadBytes(imageRef, file, metadata);            
                  const files = await listAll(storageRef);
                  const sortedFiles = files.items.sort((a, b) => {
                    const timestampA = parseInt(a.name.split('_')[0]);
                    const timestampB = parseInt(b.name.split('_')[0]);
                    return timestampB - timestampA;
                  });
            
                  if (sortedFiles.length > 0) {
                    const lastUploadedFile = sortedFiles[0];
                    console.log('Last uploaded file:', lastUploadedFile);
                    console.log(lastUploadedFile);
                    const downloadURL = await getDownloadURL(lastUploadedFile);
                    console.log('Download URL:', downloadURL);
                    newPost.img = downloadURL;
                    console.log(newPost)
                  } else {
                    console.log('No files found in the storage path.');
                  }
                  await axios.post('https://redux-server-chi.vercel.app/posts', newPost);
                  window.location.reload();
                } catch (err) {
                  console.error('Error:', err);
                }
            }  
    }
  return (
    <Sharee>
        <Sharewraper>
            <Text>
                <Image src={user.profilePicture || 'https://peach-advisory-zebra-318.mypinata.cloud/ipfs/QmT64bZ8iGeqwwvng1HsbTWvmPSB8SDagqMecYycRhCP8f'} />
                <Input placeholder={"what's in your mind " + user.username + "?"} ref={desc}/>
            </Text>
            <Hr/>
            {file && (
              <Shareimgcon>
                <Imgg src={URL.createObjectURL(file)}/>
                <CancelIcon style={{ position: 'absolute', top: 0, right: '20px', cursor: 'pointer', opacity: 0.7}} onClick={() => setFile(null)}/>
              </Shareimgcon>
            )}
            <Media onSubmit={submitHandler}>
                <Icons>
                    <Icon1 htmlFor='file'>
                      <PermMediaTwoToneIcon/>
                      <Span>Photo or Vider</Span>
                      <InputPhoto type="file" style={{ display: "none"}} id='file' accept=".png,.jpeg,.jpg" onChange={(e)=> setFile(e.target.files[0])}/>
                    </Icon1>
                    <Icon>
                      <LabelTwoToneIcon/>
                      <Span>Tag</Span>
                    </Icon>
                    <Icon>
                      <LocationOnTwoToneIcon/>
                      <Span>Location</Span>
                    </Icon>
                    <Icon>
                      <EmojiEmotionsTwoToneIcon/>
                      <Span>Feeling</Span>
                    </Icon>
                </Icons>
                <Button type="submit">Share</Button>
            </Media>
        </Sharewraper>
    </Sharee>
  )
}

export default Share

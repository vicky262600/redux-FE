import styled from 'styled-components'

const Maincontainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Birthdaydiv = styled.div`
  align-items: center;
`
const Text = styled.span`
  margin-left: 20px 20px 0 0;
`
const Image = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
const Hr = styled.hr`
  margin-top: 20px;
  color: lightgray;
`
const Text1 = styled.div`
  font-weight: bold;
`


const Rightbar = () => {

  return (
    <Maincontainer>
        <Birthdaydiv>
            <Image src="https://user-images.githubusercontent.com/145147066/275372966-97c35e03-d1d5-474e-b265-7ab2c02b8a18.png"/>
            <Text><b>Vinit singh</b> and <b>3 other friends</b> have birthday today.</Text>
        </Birthdaydiv>
        <Hr/>
        <Text1>Online Friends</Text1>
    </Maincontainer>
  )
}

export default Rightbar

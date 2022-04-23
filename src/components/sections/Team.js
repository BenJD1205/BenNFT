import React from 'react'
import styled from 'styled-components';
import ConfettiComponent from '../Conffeti';

import img1 from '../../assets/Nfts/bighead-1.svg';
import img2 from '../../assets/Nfts/bighead-2.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img6 from '../../assets/Nfts/bighead-6.svg';
import img7 from '../../assets/Nfts/bighead-7.svg';
import img8 from '../../assets/Nfts/bighead-8.svg';
import img9 from '../../assets/Nfts/bighead-9.svg';

const Section = styled.section`
  min-height:100vh;
  width:100vw;
  ${'' /* background-color:${props => props.theme.text}; */}
  position:relative;
`
const Title = styled.h2`
  font-size:${(props) => props.theme.fontxxl};
  text-transform:capitalize;
  color:${props => props.theme.text};
  display:flex;
  align-items:center;
  justify-content:center;
  border-bottom:2px solid ${props => props.theme.text};
  width:fit-content;
  margin:1rem auto;

  @media (max-width:40em){
    font-size:${props => props.theme.fontxxl};
  }
`
const Container = styled.div`
  width:75%;
  display:flex;
  margin:2rem auto;
  
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;

  @media (max-width:64em){
    width:80%;
  }

  @media (max-width:48em){
    width:90%;
    justify-content:center;
  }
`
const Item = styled.div`
  width:calc(20rem - 4vw);
  padding:1rem 0;
  color:${props=> props.theme.body};
  margin:2rem 1rem;
  position:relative;

  border:2px solid ${props => props.theme.text};
  border-radius:20px;
  transition:all 0.3s ease;
  backdrop-filter:blur(4px);
  z-index:5;

  &:hover{
    img{
      transform:translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width:30em){
    width:70vw;
  }
`

const ImgContainer = styled.div`
  width:80%;
  margin:0 auto;
  background-color:${props=> props.theme.carouselColor};
  border: 1px solid ${props => props.theme.text};
  border-radius:20px;
  cursor:pointer;

  img{
    width:100%;
    height:auto;
    transition: all 0.3s ease;
  }
`
const Name = styled.h2`
  font-size:${props => props.theme.fontlg};
  display:flex;
  align-items:center;
  justify-content:center;
  text-transform:uppercase;
  color:${props => props.theme.text};
  margin-top:1rem;
`
const Position = styled.h2`
  font-size:${props => props.theme.fontmd};
  display:flex;
  align-items:center;
  justify-content:center;
  text-transform:capitalize;
  color:${props => `rgba(${props.theme.textRgba},0.9)`};
  margin-top:1rem;
  font-weight:400;
`

const MemberComponent = ({img,name="",position=""}) => {
  return (
    <Item>
      <ImgContainer>
        <img src={img} alt="" />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

const Team = () => {
  return (
    <Section id="team">
      <ConfettiComponent />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name="SKYBLAZE" position="Founder" />
        <MemberComponent img={img2} name="MEGNUM" position="Co-founder" />
        <MemberComponent img={img3} name="MONKEY KING" position="Director" />
        <MemberComponent img={img4} name="BLACK PANTHER" position="Manager" />
        <MemberComponent img={img5} name="LAZY KONG" position="Artist" />
        <MemberComponent img={img6} name="CYBER PUNK" position="Social media manager" />
        <MemberComponent img={img7} name="MONK" position="Web Developer" />
        <MemberComponent img={img8} name="BANANA" position="Graphic Designer" />
        <MemberComponent img={img9} name="DEATHSTROKE" position="Blockchain Specialist" />
      </Container>
    </Section>
  )
}

export default Team
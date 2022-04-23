import React, {useRef} from 'react'
import styled, {keyframes} from 'styled-components';

import img1 from '../../assets/Nfts/bighead-1.svg';
import img2 from '../../assets/Nfts/bighead-2.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img6 from '../../assets/Nfts/bighead-6.svg';
import img7 from '../../assets/Nfts/bighead-7.svg';
import img8 from '../../assets/Nfts/bighead-8.svg';
import img9 from '../../assets/Nfts/bighead-9.svg';
import img10 from '../../assets/Nfts/bighead.svg';
import ETH from '../../assets/icons8-ethereum-48.png';

const Section = styled.section`
  min-height:100vh;
  width:100vw;
  background-color:${props => props.theme.text};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position:relative;
  overflow: hidden;

  &>*:first-child{
    animation-duration:20s;
    @media (max-width:30em){
      animation-duration:15s;
    }
  }

  &>*:last-child{
    animation-duration:15s;
    @media (max-width:30em){
      animation-duration:10s;
    }
  }
`
const move = keyframes`
  0%{ transform:translateX(100%)};
  100%{ transform:translateX(-100%)}
`

const Row = styled.div`
  white-space:nowrap;
  box-sizing:content-box;
  margin:2rem 0;
  display:flex;
  animation:${move} 20s infinite linear ${props => props.direction};
`
const ImgContainer = styled.div`
  width:15rem;
  margin:0 1rem;
  background-color:${props=> props.theme.body};
  border-radius:20px;
  cursor:pointer;

  @media (max-width:48em){
    width:12rem;

    @media (max-width:30em){
      width:10rem;
    }
  }

  img{
    width:100%;
    height:auto;
  }
`
const Details = styled.div`
  display:flex;
  justify-content:space-between;
  padding:0.8rem 1rem;
  background-color:${props => props.theme.text};
  border:2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;

  span{
    font-size:${props =>props.theme.fontsm};
    color:${props => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight:600;
    line-height:1.5rem;
  }

  h1{
    font-size:${props =>props.theme.fontmd};
    font-weight:600;
    color:${props => props.theme.body};

    @media (max-width:30em){
      font-size:${props => props.theme.fonsm};
    }
  }
`
const Price = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;

  img{
    width:1rem;
    height:auto;
  }
`

const NftItem = ({img,number=0,price=0,passRef}) => {
  
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  } 

  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  }

  return (
    <ImgContainer onMouseOver={e =>pause(e)} onMouseOut={e => play(e)} >
      <img src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Weirdos</span><br/>
          <h1>#{number}</h1>
        </div>
        
        <div>
          <span>Price</span><br/>
          <Price>
            <img src={ETH}  atl="" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}

const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1}  alt="" number={800} price={1.2} passRef={Row1Ref} />
        <NftItem img={img2}  alt="" number={700} price={2.2} passRef={Row1Ref} />
        <NftItem img={img3}  alt="" number={600} price={4.2} passRef={Row1Ref} />
        <NftItem img={img4}  alt="" number={500} price={5.5} passRef={Row1Ref} />
        <NftItem img={img5}  alt="" number={200} price={4.8} passRef={Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img6}  alt="" number={120} price={6.2} passRef={Row2Ref} />
        <NftItem img={img7}  alt="" number={230} price={3.2} passRef={Row2Ref} />
        <NftItem img={img8}  alt="" number={320} price={5.4} passRef={Row2Ref} />
        <NftItem img={img9}  alt="" number={450} price={7.2} passRef={Row2Ref} />
        <NftItem img={img10} alt="" number={740} price={4.4} passRef={Row2Ref}  />
      </Row>
    </Section>
  )
}

export default Showcase
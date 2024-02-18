import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate()
  return (
    <PlayContainer>
        <div className='player'>
          <div className='backArrow'>
            <BsArrowLeft onClick={()=>navigate(-1)}/>
          </div>
          <video src='https://cdn.cloudflare.steamstatic.com/steam/apps/256660477/movie480.webm?t=1454603660'
          autoPlay loop controls 
          />
        </div>
    </PlayContainer>
  )
}

const PlayContainer = styled.div`
    .player{
      width: 100vw;
      height: 100vh;
      .backArrow{
         position: absolute;
         padding: 2rem;
         z-index: 1;
         svg{
          font-size: 3rem;
          cursor: pointer;
          color: white;
         }
      }
     video{
      height: 100%;
      width: 100%;
     }
    }
`

export default Player

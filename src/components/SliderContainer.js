import React from 'react'
import styled from 'styled-components'
import MovieSlider from './MovieSlider'

const SliderContainer = ({movies}) => {

    const getMoviesBetween = (start, end)=>{
        return movies.slice(start, end)
    }

  return (
   <SliderWrapper>
      <MovieSlider data={getMoviesBetween(0,10)} title="Comedy Movies" />
      <MovieSlider data={getMoviesBetween(10,20)} title="Thriller Movies" />
      <MovieSlider data={getMoviesBetween(20,30)} title="Science Fiction Movies" />
      <MovieSlider data={getMoviesBetween(30,40)} title="Romantic Movies" />
      <MovieSlider data={getMoviesBetween(40,50)} title="Crime Movies" />
      <MovieSlider data={getMoviesBetween(50,60)} title="New Releases" />
      <MovieSlider data={getMoviesBetween(60,70)} title="Action Movies" />
   </SliderWrapper>
  )
}
const SliderWrapper = styled.div`

`

export default SliderContainer
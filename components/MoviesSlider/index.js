// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const list = ['ddd', 'rrrr', 'sssss', 'dfmdd']
  let comedylist = []
  let actionlist = []

  moviesList.map(each => {
    if (each.categoryId === 'ACTION') {
      actionlist = [...actionlist, each]
    } else {
      comedylist = [...comedylist, each]
    }
  })

  function Next(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: 'red'}}
        onClick={onClick}
      />
    )
  }

  function Previous(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: 'green'}}
        onClick={onClick}
      />
    )
  }

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <Next />,
    prevArrow: <Previous />,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {actionlist.map(each => (
          <div>
            <MovieItem moviesList={each} />
          </div>
        ))}
      </Slider>

      <Slider {...settings}>
        {comedylist.map(each => (
          <div>
            <MovieItem moviesList={each} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider

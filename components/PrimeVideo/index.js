// Write your code here
import './index.css'
import MovieItem from '../MovieItem'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  let comedylist = []
  let actionlist = []

  const popupvideo = id => {}

  moviesList.map(each => {
    if (each.categoryId === 'ACTION') {
      actionlist = [...actionlist, each]
    } else {
      comedylist = [...comedylist, each]
    }
  })
  console.log(actionlist)
  console.log(comedylist)
  return (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="imgstyle"
      />
      <div className="bg-cont">
        <h1>Action Movies</h1>
        <MoviesSlider moviesList={actionlist} popupvideo={popupvideo} />
        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={comedylist} popupvideo={popupvideo} />
      </div>
    </>
  )
}
export default PrimeVideo

// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {moviesList} = props
  const {id, thumbnailUrl, videoUrl, categoryId} = moviesList

  const onclickvideo = () => {
    popupvideo(id)
  }

  return (
    <div className="popup-container">
      <Popup trigger={<img src={thumbnailUrl} alt="thumbnail" />}>
        {close => (
          <>
            <div className="popupcont">
              <button className="closebutton" data-testid="closeButton" onClick={() => close()}>
                <IoMdClose />
              </button>
              <ReactPlayer url={videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem

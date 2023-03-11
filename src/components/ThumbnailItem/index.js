// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onThumbnailClicked, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const isActiveClassName = isActive ? 'opacity-none' : 'thumbnail-img'
  const thumbnailClicked = () => {
    onThumbnailClicked(id)
  }
  return (
    <li className="list-container">
      <button
        className="thumbnail-button"
        type="button"
        onClick={thumbnailClicked}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`${isActiveClassName} img-details`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

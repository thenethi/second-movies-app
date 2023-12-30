import {Link} from 'react-router-dom'
import './index.css'

const PopularItem = props => {
  const {popularData} = props
  const {id, title, posterPath} = popularData

  return (
    <li className="movie-item" key={id}>
      <Link to={`/movies/${id}`} key={id}>
        <img src={posterPath} alt={title} className="movie-item-image" />
      </Link>
    </li>
  )
}

export default PopularItem

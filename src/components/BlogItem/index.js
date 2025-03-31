// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, author, imageUrl, avatarUrl, topic} = blogItemDetails
  return (
    <Link to={`/blogs/${id}`} className="link">
      <li className="blog-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={title} className="image-url" />
        </div>
        <div className="content-container">
          <p>{topic}</p>
          <h4>{title}</h4>
          <div className="p-container">
            <img src={avatarUrl} alt={author} className="avatar-image" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem

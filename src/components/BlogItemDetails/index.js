// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {IdBlogItemDetails: {}, isLoad: true}

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const convertedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({IdBlogItemDetails: convertedData, isLoad: false})
  }

  render() {
    const {IdBlogItemDetails, isLoad} = this.state
    const {title, author, imageUrl, avatarUrl, content} = IdBlogItemDetails
    return (
      <div>
        {isLoad ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-item-details-container">
            <h1>{title}</h1>
            <div className="p-container-id">
              <img src={avatarUrl} alt={author} className="avatar" />
              <p>{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="image" />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails

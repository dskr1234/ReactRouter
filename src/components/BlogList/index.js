// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {blogsDataList: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemDataList()
  }

  getBlogItemDataList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
      topic: eachItem.topic,
      author: eachItem.author,
    }))
    this.setState({blogsDataList: updatedData, isLoading: false})
  }

  render() {
    const {blogsDataList, isLoading} = this.state
    return (
      <div className="blogListMainContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="blogListItem-inner-container">
            {blogsDataList.map(eachBlog => (
              <BlogItem key={eachBlog.id} blogItemDetails={eachBlog} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList

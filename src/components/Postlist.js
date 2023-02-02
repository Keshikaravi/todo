import { React, Component } from "react";
import axios from "axios";

class PostList extends Component {
  // function PostList() {

  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((Res) => Res.json())
  //   .then((res) => console.log(res));
  // axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => console.log(res.data));

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        List of posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        hey keshika
      </div>
    );
  }
}

export default PostList;

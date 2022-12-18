import React, { Component } from "react";
import HeaderV1 from "../components/headerV1/headerV1";
import BlogBanner from "../components/blogBanner/blogBanner";
import BlogLeftSideContentV1 from "../components/blogLeftSideContentV1/blogLeftSideContentV1";
import HaveQuestion from "../components/haveQuestion/haveQuestion";
import FooterV1 from "../components/footerV1/footerV1";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clactive: ""
    }
  }

  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div className="font-primary font-medium blogpage">
        <HeaderV1 lactivez="blog"/>
        <BlogBanner title= "Blog"/>
        <BlogLeftSideContentV1 />
        <HaveQuestion />
        <FooterV1 />        
      </div>
    );
  }
}

export default Blog;
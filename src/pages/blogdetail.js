import React, { Component } from "react";
import HeaderV1 from "../components/headerV1/headerV1";
import BlogBanner from "../components/blogBanner/blogBanner";
import BlogLeftSideContentV2 from "../components/blogLeftSideContentV2/blogLeftSideContentV2";
import RelatedPosts from "../components/relatedPosts/relatedPosts";
import FooterV1 from "../components/footerV1/footerV1";

class BlogDetail extends Component {
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
        <BlogBanner title= "FinCEN Issues a Geographic Targeting..."/>
        <BlogLeftSideContentV2 />
        <RelatedPosts />
        <FooterV1 />        
      </div>
    );
  }
}

export default BlogDetail;
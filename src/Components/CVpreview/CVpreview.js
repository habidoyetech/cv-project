import { Component } from "react";
import Content from "./Content";
import Aside from "./Aside";


class CVPreview extends Component {
  render() {
    const { cv } = this.props
    
    return (
      <div className="cvPreviewContainer">
        <Aside personalInfo={cv.personalInfo}/>
        <Content
          personalInfo={cv.personalInfo}
          experience={cv.experience}
          education={cv.education}
        />
      </div>
    )
  }
}

export default CVPreview;
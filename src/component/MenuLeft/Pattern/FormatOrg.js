import React, {Component} from "react";
import {observer, inject} from "mobx-react";

import {formatDocOrg} from "../../../utils/editorKeyEvents";

import "../common.css";

@inject("content")
@observer
class FormatOrg extends Component {
  handleFormat = () => {
    const {content} = this.props.content;
    formatDocOrg(content, this.props.content);
  };

  render() {
    return (
      <div id="nice-menu-format" className="nice-menu-item" onClick={this.handleFormat}>
        <span>
          <span className="nice-menu-flag" />
          <span className="nice-menu-name">格式化文档-原始</span>
        </span>
      </div>
    );
  }
}

export default FormatOrg;

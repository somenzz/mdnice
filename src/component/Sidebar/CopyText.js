import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {message, Tooltip} from "antd";

import {copySafari} from "../../utils/converter";
import {LAYOUT_ID, ENTER_DELAY, LEAVE_DELAY} from "../../utils/constant";
import SvgIcon from "../../icon";
import "./CopyText.css";

@inject("content")
@inject("navbar")
@inject("imageHosting")
@inject("dialog")
@observer
class CopyText extends Component {
  constructor(props) {
    super(props);
    this.html = "";
  }

  copyText = () => {
    const layout = document.getElementById(LAYOUT_ID); // 保护现场
    const html = layout.innerText;
    console.log(html);
    copySafari(html);
    message.success("已复制，请粘贴文本");
    // layout.innerHTML = html; // 恢复现场
  };

  render() {
    return (
      <Tooltip placement="left" mouseEnterDelay={ENTER_DELAY} mouseLeaveDelay={LEAVE_DELAY} title="仅复制">
        <a id="nice-sidebar-copytext" className="nice-btn-copytext" onClick={this.copyText}>
          <SvgIcon name="copyText" className="nice-btn-copytext-icon" />
        </a>
      </Tooltip>
    );
  }
}
export default CopyText;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { message, Tooltip } from "antd";

import { copySafari } from "../../utils/converter";
import { LAYOUT_ID, ENTER_DELAY, LEAVE_DELAY } from "../../utils/constant";
import SvgIcon from "../../icon";

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

    let style = {
      height: "40px",
      width: "40px"
    }
    return (
      <Tooltip placement="left" mouseEnterDelay={ENTER_DELAY} mouseLeaveDelay={LEAVE_DELAY} title="仅复制">
        <a id="nice-sidebar-wechat" className="nice-btn-wechat" onClick={this.copyText}>
          <img style={style} src="/copy.svg" alt="description of image"></img>
        </a>
      </Tooltip>
    );
  }
}
export default CopyText;
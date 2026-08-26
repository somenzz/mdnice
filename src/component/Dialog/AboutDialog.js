import React, {Component} from "react";
import {observer, inject} from "mobx-react";
import {Modal, Button} from "antd";

@inject("dialog")
@observer
class AboutDialog extends Component {
  handleOk = () => {
    this.props.dialog.setAboutOpen(false);
  };

  handleCancel = () => {
    this.props.dialog.setAboutOpen(false);
  };

  handleVersion = () => {
    this.props.dialog.setAboutOpen(false);
    this.props.dialog.setVersionOpen(true);
  };

  render() {
    return (
      <Modal
        title="关于"
        okText="确认"
        cancelText="取消"
        visible={this.props.dialog.isAboutOpen}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="version" onClick={this.handleVersion}>
            更新记录
          </Button>,
          <Button key="submit" type="primary" onClick={this.handleOk}>
            确认
          </Button>,
        ]}
        bodyStyle={{
          paddingTop: "5px",
        }}
      >
        <h3 style={style.headerMargin}>
          Markdown Nice
          <a
            id="nice-about-dialog-star"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/somenzz/mdnice"
            aria-label="GitHub Stars"
            style={style.noBorder}
          >
            <img alt="GitHub Stars" style={style.img} src="https://badgen.net/github/stars/mdnice/markdown-nice" />
          </a>
        </h3>

        <p style={style.lineHeight}>支持自定义样式的 Markdown 编辑器；</p>
        <p style={style.lineHeight}>支持微信公众号、知乎和稀土掘金；</p>
        <p style={style.lineHeight}>
          如果你喜欢高效工具，欢迎扫左边图片关注公众号「Python七号」，扫右边图片添加微信好友回复「入群」拉你进入技术交流群。
        </p>
        <div style={{display: "flex", alignItems: "center"}}>
          <img alt="公众号「Python七号」" style={style.leftImgWidth} src={`${process.env.PUBLIC_URL}/mp.jpeg`} />
          <img alt="个人微信somenzz-enjoy" style={style.rightImgWidth} src={`${process.env.PUBLIC_URL}/wechat.jpg`} />
        </div>
      </Modal>
    );
  }
}

const style = {
  leftImgWidth: {
    width: "40%",
    height: "100%",
  },
  rightImgWidth: {
    width: "40%",
    height: "100%",
  },
  headerMargin: {
    marginTop: "5px",
    marginBottom: "5px",
    color: "black",
  },
  lineHeight: {
    lineHeight: "26px",
    color: "black",
    padding: 0,
    margin: 0,
  },
  img: {
    width: "70px",
    marginLeft: "10px",
    display: "inline-block",
  },
  noBorder: {
    border: "none",
  },
};

export default AboutDialog;

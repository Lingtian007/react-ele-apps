import React, {Component} from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './technology.scss'

class Food extends Component {
  goBack = () =>{
    this.props.history.goBack();
  }

  render() {
    console.log("this.props.location.query", this.props.location.query);
    
    return (
      <div className="tech-container">
        <Header title="确认订单" goBack={this.goBack} />
        <div className="tech-list">
          <div className="order-header">
            <i className="icon-location"></i>
    
            请添加一个收货地址
            <i className="icon-arrow-right"></i>
          </div>
          <div className="top">
          <span className="time">送达时间</span>
          <span className="right">
            <div>尽快送达 | 预计 17:07</div>
            <div>蜂鸟专送</div>
          </span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Food
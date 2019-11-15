import React, {Component} from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './order.scss'

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
              <div className="p1">尽快送达 | 预计 17:07</div>
              <div className="p2">蜂鸟专送</div>
            </span>
          </div>
          <div className="aply">
            <div className="method">
              <span className="o1">支付方式</span>
              <span className="o2">在线支付 ></span>
            </div>
            <div className="hong">
              <span className="o3">红包</span>
              <span className="o4">暂时只在饿了么APP中支持</span>
            </div>
          </div>
          <div className="new">
            {/* <img src="../../../public/logo192.png" alt=""/> */}

            <div className="title">
              <span className="img"></span>
              必胜客(新世界店)
            </div>
            <div className="list">
              <span className="name">双人分享套餐A</span>
              <span className="num">x 1</span>
              <span className="price">¥ 74</span>
            </div>
            <div className="list">
              <span className="name">双人分享套餐A</span>
              <span className="num">x 1</span>
              <span className="price">¥ 74</span>
            </div>
            <div className="list">
              <span className="name">双人分享套餐A</span>
              <span className="num">x 1</span>
              <span className="price">¥ 74</span>
            </div>
            <div className="list">
              <span className="name">双人分享套餐A</span>
              <span className="num">x 1</span>
              <span className="price">¥ 74</span>
            </div>
           
            <div className="order">
              <span className="name2">订单 ¥425</span>
           
              <span className="price2">待支付 ¥425</span>
            </div>
          </div>
            <div className="sure">
            <div className="l1">待支付 ¥425</div>
            <div className="l2">确认下单</div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Food
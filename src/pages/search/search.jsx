import React, { Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import API from "../../api/api";
import PropTypes from "prop-types";
import { saveAttrInfo } from "../../store/action";
import { connect } from "react-redux";
import { is, fromJS } from "immutable"; // 保证数据的不可变
import AlertTip from "../../components/alert_tip/alert_tip";
// import Shop from '../../components/shop_list/shop_list'
import "./search.scss";

class Food extends Component {
  static propTypes = {
    saveAttrInfo: PropTypes.func.isRequired
  };
  state = {
    val: "",
    geohash: "",
    alertText: "111",
    hasAlert: "",
    lishi: "",
    list: ["肯德基", "必胜客", "德克士"],
    no:""
  };
  goBack = () => {
    // 指定路由
    // this.props.history.push("/msite");
    // console.log(this.props.history);
    // 返回上一页
    this.props.history.goBack();
  };
  change = event => {
    this.setState({ val: event.target.value });
    this.state.lishi = false;
  };
  // ---
  cityGuess = async () => {
    let res = await API.cityGuess();
    this.setState({
      geohash: [res.latitude, res.longitude]
    });
    console.log("===", res);
    //  console.log("this.state.geohash:", this.state.geohash);

    this.props.saveAttrInfo("geohash", [res.latitude, res.longitude]);
    // this.getPoisSite([res.latitude, res.longitude]);
    // this.getFoodTypes();
  };
  // 搜索
  search = () => {
    let obj = {
      "extras[]": "restaurant_activity",
      geohash: this.state.geohash[0] + "," + this.state.geohash[1],
      // "latitude": 31.23037 ,
      // "longitude":121.473701,
      keyword: this.state.val
      // "type": "search"
    };

    let res = API.search(obj);
    // console.log("res", res);
    // this.setState({
    //   result:res.
    // })
  };
  // 提示
  handleClick = () => {
    if (!this.state.val) {
      // console.log(1111);
      let alertText = "搜索栏不能为空";
      this.setState({
        hasAlert: !this.state.hasAlert,
        alertText
      });
    } else {
      this.search();
      // let pen = this.state.list;
      const list = this.state.list;
      list.unshift(this.state.val);
      this.setState({ list });
      this.state.no = true

      // let alertText = "未查询到相关商家或地址";
      // this.setState({
      //   hasAlert: !this.state.hasAlert,
      //   alertText
      // });
    }
  };
  // 清空
  empty = () => {
    this.setState({
      val: ""
    });
    this.state.no = false;
    this.state.lishi = true;
  };
  empty2 = index => {
    console.log(index);
    let arr = this.state.list.filter((items, ind) => ind != index);
    this.setState({
      list: arr
    });
    if (arr.length == 0) {
      this.setState({
        lishi: false
      });
    }
  };
  empty3 = () => {
    this.setState({
      list: [],
      lishi: false
    });
  };
  componentDidMount() {
    this.cityGuess();
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState);

  //   // 判断是否要更新render, return true 更新  return false不更新
  //   return (
  //     !is(fromJS(this.props), fromJS(nextProps)) ||
  //     !is(fromJS(this.state), fromJS(nextState))
  //   );
  // }
  render() {
    return (
      <div className="tech-container">
        <Header title="搜索" goBack={this.goBack} />
        <div className="tech-list">
          <i className="icon-search in"></i>
          <i className="icon-shanchu out" onClick={this.empty}></i>
          <input
            placeholder="搜素商家"
            className="input"
            value={this.state.val}
            onChange={this.change}
          ></input>
          <button className="btn" onClick={this.handleClick}>
            提交
          </button>
          {/* <span ></span> */}
        </div>
        {this.state.no ? <div className="no">很抱歉！无搜索结果</div> : ""}
        {this.state.lishi ? (
          <div>
            <div className="lishi">搜索历史</div>
            {this.state.list.map((item, index) => {
              return (
                <div className="item" key={index}>
                  {item}
                  <i
                    className="icon-shanchu ou"
                    onClick={this.empty2.bind(this, index)}
                  ></i>
                </div>
              );
            })}
            <div className="del" onClick={this.empty3}>
              清空搜索记录
            </div>
          </div>
        ) : (
          ""
        )}
        <Footer />
        {this.state.hasAlert && (
          <AlertTip
            logout={() => {
              return false;
            }}
            closeTip={this.handleClick}
            alertText={this.state.alertText}
          />
        )}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    saveAttrInfo: (attr, geohash) => dispatch(saveAttrInfo(attr, geohash))
  };
};
export default connect(
  () => ({}),
  mapDispatchToProps
)(Food);

// export default Food

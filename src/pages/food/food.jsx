import React, { Component } from 'react'
import ShopList from '../../components/shop_list/shop_list'
import Header from '../../components/header/header'
import './food.scss'
class Food extends Component {
  goBack = () => {
    this.props.history.push('/msite')
  }
  
  

  render() {
    // console.log(this.props.location.pathname.split('/')[4]);
    // console.log(this.props.location.pathname.split('/')[2]);
    // return (
    //   <div className='foodlist-container'>
    //     <Header title={this.props.location.pathname.split('/')[4]} goBack={this.goBack} />
    //     <ShopList geohash={this.props.location.pathname.split('/')[2].split(',')} />
    //   </div>
    // )
    //  console.log(this.props.match.params);
    
    return (
      <div className='foodlist-container'>
        <Header title={this.props.match.params.title} goBack={this.goBack}/>
        <ShopList geohash={this.props.match.params.geohash.split(',')}/>
      </div>
    )
  
  }

}
export default Food

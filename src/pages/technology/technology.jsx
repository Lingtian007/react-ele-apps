import React, {Component} from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './technology.scss'

class Food extends Component {
  goBack = () =>{
    this.props.history.goBack();
  }
  render () {
    return (
      <div className='tech-container'>
        <Header title='订单列表' goBack={this.goBack}/>
        <div className="tech-list">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Food
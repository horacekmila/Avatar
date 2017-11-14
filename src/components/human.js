import React, { Component } from 'react'

export default class Human extends Component {
    render()  {
        let tisk;
        if (this.props.square) {
        tisk = (
        <div className="HratanyBox col-md-4">
         <div className="col-md-4"><img className="picture" src={this.props.photo} height="50px" width="50px"/></div>
         <div className="col-md-8"> {this.props.name}</div>
        </div>
      )
    } 
        else {
        tisk = (
        <div className="Box col-md-4">
          <div className="col-md-4"><img className="picture" src={this.props.photo} height="50px" width="50px"/></div>
          <div className="col-md-8"> {this.props.name}</div>
        </div>
      )
    }
        return (
            <div className="col-md-12">
               <div className="col-md-4" > 
               </div>
               {tisk}
            </div>
        )
    }
}
Human.defaultProps = {
    name:"Joe Doe",
    square: false,
    photo: './public/base.jpg'
}
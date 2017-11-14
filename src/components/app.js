import React, { Component } from 'react';
import Human from './human'

export default class App extends Component {
  render() {
    return (<div>
      <Human name="Petr Novák"/>
      <Human/>
      <Human name="Petr Novák" photo='./public/Novak.png' />
      <Human name="Petr Novák" square={true}/>
      <Human square={true} />
      <Human  name="Petr Novák" square={true}  photo='./public/Novak.png'/>
      </div>);
  }
}

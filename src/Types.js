import React from 'react';
import {getRegion} from './utils/api';

export default class Types extends React.Component {
  componentWillMount() {
    console.log(getRegion('kanto'));
  }
  render() {
    return(
      <div>hi</div>
    )
  }
}
import React, {Component} from 'react';
import './index.css';

export default function Nav(props) {
  return (<form onClick={props.onClick} className="nav">
    <h4>SEARCH</h4>
    <input type="text" value={props.input} onChange={props.onChange} placeholder='Search...'/>
    <p>||</p>
    <h4>LOGIN</h4>
  </form>)
}

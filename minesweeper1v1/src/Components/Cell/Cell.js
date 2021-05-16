import React from 'react';
/*import two from '../../assets/2.png';
import three from '../../assets/3.png';
import four from '../../assets/4.png';
import five from '../../assets/5.png';
import six from '../../assets/6.png';
import seven from '../../assets/7.png';
import eight from '../../assets/8.png';
import mine from '../../assets/m.png';
import flag from '../../assets/f.png';
import normal from '../../assets/x.png';*/
import classes from './Cell.module.css';


const cell = (props)=>
{
    const style = {
        block: {
          width: 40,
          height: 40,
          color: 'red',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 800,
          fontSize: 30,
          cursor: "pointer",
          backgroundColor:'green'
      }};
 return (
 <div  style={style.block} >
    
 </div>)

}

export default cell;
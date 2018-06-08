import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  hobby: PropTypes.string.isRequired
};

// class Hobby extends React.Component{
//     render(){
//         return (
//             <li>{this.props.hobby}</li>
//         )
//     }
// }

//无状态的函数写法，他是一种只负责展示的纯组件

function Hobby(props) {
  return <li>{props.hobby}</li>;
}

Hobby.propTypes = propTypes;

export default Hobby;

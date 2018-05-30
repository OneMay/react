import  React from 'react';
import  PropTypes from 'prop-types';
//需要验证的属性
const propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
};
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            liked:0
        };
        this.likedCallback = this.likedCallback.bind(this);
    }

    likedCallback(){
        let liked = this.state.liked;
        liked++;
        this.setState({
            liked
        });
    }

    render(){
        return (
            <div>
                <h1>我的名字叫{this.props.name}</h1>
                <h2>我今年{this.props.age}</h2>
                <button onClick={this.likedCallback}>给我点赞</button>
                <h2>点赞总数：{this.state.liked}</h2>
            </div>
        )
    }
    componentDidMount(){//在render完成并且组件装载完成之后调用的方法
        setTimeout(()=>{
            this.likedCallback();
        },1000);
    }
}

//将验证赋值给这个组件的propTypes属性
Profile.propTypes = propTypes;

export default Profile;


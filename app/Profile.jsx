import  React from 'react';
import  PropTypes from 'prop-types';
import Hobby from './Hobby';
//需要验证的属性
const propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
};
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            liked:0,
            hobbies:['skateboarding','rock music']
        };
        this.likedCallback = this.likedCallback.bind(this);
        this.addHobbyCallback = this.addHobbyCallback.bind(this);
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
                <h2>我的爱好：</h2>
                <ul>
                    {this.state.hobbies.map((hobby,i)=> <Hobby key={i} hobby={hobby} />)}
                </ul>
                <input type="text" ref="hobby" />
                <button onClick={this.addHobbyCallback}>添加爱好</button>
            </div>
        )
    }
    componentDidMount(){//在render完成并且组件装载完成之后调用的方法
        setTimeout(()=>{
            this.likedCallback();
        },1000);
    }
    addHobbyCallback(){
        let hobbyInput = this.refs.hobby;
        let  val = hobbyInput.value;
        if(val){
            let hobbies = this.state.hobbies;
            hobbies = [...hobbies,val];
            this.setState({
                hobbies
            },()=>{
                hobbyInput.value='';
            })
        }
    }
}

//将验证赋值给这个组件的p   ropTypes属性
Profile.propTypes = propTypes;

export default Profile;


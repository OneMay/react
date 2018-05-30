import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

// class App extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return (
//             <div className="container">
//                 <h1>Hello React! </h1>
//             </div>
//         )
//     }
// };

const app = document.createElement('div');
app.setAttribute('id','container')
document.body.appendChild(app);
//ReactDOM.render(<App />,app)

const props = {
    name:"viking",
    age:20
};
ReactDOM.render(<Profile {...props} />,document.getElementById('container'));
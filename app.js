// import {createStore} from "redux";
// import {Provider} from "react-redux";
// let store = createStore(function(state={name:"Jack Gui"},action){
//     return state
// });

// class App extends React.Component{

//     render(){
//         return <h1>Hello {this.props.name}</h1>
//     }
// }


// ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("react-app"));


import Text from "./libs/component/text/index";

ReactDOM.render(<Text/>,document.getElementById("react-app"));
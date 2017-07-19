import {connect} from "react-redux";

class Text extends React.Component{

    render(){
        return <input type="text" id={this.props.id} value={this.props.value} onClick={this.props.onChange}/>
    }
}



const mapStateToProps = function(state){

    return {
        id:state.id,
        value:state.value
    }
}

const mapDispatchToProps = function(dispatch){

    return {
        onChange(){
            return dispatch({type:"change",payload:"123"})
        }
    }
}


let widget = connect(mapStateToProps,mapDispatchToProps)(Text);

export default widget;
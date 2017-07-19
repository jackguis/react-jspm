import {createStore} from "redux";
import reducer from "./reducer";
import {Provider} from "react-redux";
import Text from "./component";


var store = createStore(reducer);

export default ()=>{

    return <Provider store={store}><Text/></Provider>
}
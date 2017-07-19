export default (state = {}, action) => {

    console.info(action.payload);
    switch (action.type) {

        case "change":
            state.value = action.payload
    }

    return {...state};

}
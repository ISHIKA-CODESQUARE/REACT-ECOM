const auth = localStorage.getItem("auth");

export const initialState =  auth ? "true" : null;
export const reducer = (state, action) => {
if(action.type === "USER"){
    return action.payload
}
return state
}
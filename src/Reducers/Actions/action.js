export const userState=(props) =>{
    return({
        type:"LOGIN_USER",
        payload:{
            email:props.email,
            token:props.token
        }
    })
}
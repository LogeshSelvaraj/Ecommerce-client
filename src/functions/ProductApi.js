
import axios from "axios"

export const createProduct=async (token,payload)=>{

    // let formdata=new FormData()
    //     formdata.append(" chumma","funny")
    //     formdata.append("values",payload.values)
    //     formdata.append("images",payload.images)
    //     formdata.append("specs",payload.specs)
    return await axios.post(
         `${process.env.REACT_APP_BACKEND_API_DOMAIN}/product`,
         payload,
         { headers:{
             token,
        } })

        // console.log(formdata)

        // return await  axios({
        //     method: 'post',
        //     url: `${process.env.REACT_APP_BACKEND_API_DOMAIN}/product`,
        //     data: formdata,
        //     headers: {
        //         'Content-Type': `multipart/form-data; boundary=${formdata._boundary}`,
        //         token
        //     },
        // });

}

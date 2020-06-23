

const api = (url,method,body)=>{
    return fetch(url,{
        "method":method,
        "body": body,
        "headers": {
            "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFZhbHVlIjo0LCJpYXQiOjE1ODgyNzEwNDR9.m8Qe1ogEUWijUv6-dpI_eqvMtxMwdE7LA4nP8Dqu4fw",
            "Content-Type": "application/json",
    }
})
        
}
export default api
//return api;
//.then(res =>res.json()).then(resp =>{return resp;})

//this.setState({
//produtos:resp
//})
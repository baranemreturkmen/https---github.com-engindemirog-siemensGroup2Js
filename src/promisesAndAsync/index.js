function get(){
    console.log("get başlangıcı")
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(({data})=>console.log(data))
    console.log("get sonu")
}
//resolve,reject
//get();

function getCatch(){
    console.log("get başlangıcı")
    axios.get("https://jsonplaceholder.typifcode.com/users")
    .then(result=>{
        console.log(result.data)
    }) //resolve
    .catch(error=>console.log(error)) //reject
    console.log("get sonu")
}

//getCatch();

//rxjs lazy
//js promise eager

function getChain(){
    console.log("get başlangıcı")
    axios.get("https://jsonplaceholder.typicode.com/users/1")
    .then(result=>{
        console.log(result.data)
        return axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${result.data.id}`)
    }) //resolve
    .then(result=>console.log(result.data))
    .catch(error=>console.log(error)) //reject
    console.log("get sonu")
}

getChain()

//callback
//nodejs
//denojs
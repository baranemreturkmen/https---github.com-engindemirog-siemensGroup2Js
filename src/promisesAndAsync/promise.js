
function promise1() {
    const wait = new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Heyyo")
            resolve("Timeout")
        },2000)
    })

    wait.then(data=>console.log(data))
}

//promise1();

function promise2() {
    let request = new Promise((resolve,reject)=>{
        let sayi = 0
        if(sayi>10){
             resolve("Engin")
        }else{
            reject("hata oluştu")
        }  
    })
    return request
}

// promise2().then(data=>console.log(data))
// .catch(error=>console.log(error));

function promise3() {
    let request = new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open("GET","https://jsonpclaceholder.typivode.com/todosdsfsdf")
        xhr.onload = ()=>resolve(xhr.responseText)
        xhr.onerror = ()=>reject("Hata oluştu")
        xhr.send()
    })
    return request
}

//promise3().then(data=>console.log(data)).catch(error=>console.log(error))

//interceptor
//async
//rxjs

function promise4() {
    let todos = axios.get("https://jsonplaceholder.typicode.com/todos");
    let users = axios.get("https://jsonplaceholder.typicode.com/users");
    let posts = axios.get("https://jsonplaceholder.typicode.com/posts");

    Promise.all([todos,users,posts])
    .then(([t,u,p])=>{
        console.log(t.data)
        console.log(u.data)
        console.log(p.data)
    }).catch(error=>console.log(error))
}

promise4();
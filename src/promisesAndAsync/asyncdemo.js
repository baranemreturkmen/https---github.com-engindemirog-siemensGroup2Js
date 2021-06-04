const axios = require('axios').default;

async function async1() {
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todosdfsdf")
        console.log(data)
    }catch(error){
      console.log(error)
    }
   
}

//async1();

async function async2() {
    try{
        const result1 = await axios.get("https://jsonplaceholder.typicode.com/todos")
        const result2 = await axios.get("https://jsonplaceholder.typicode.com/users")


        console.log(result1.data)
        console.log(result2.data)

    }catch(error){
      console.log(error)
    }
   
}

//async2()

async function async3() {
    try{
        const result1 =  axios.get("https://jsonplaceholder.typicode.com/todos")
        const result2 =  axios.get("https://jsonplaceholder.typicode.com/users")

        
       const {data:todos} = await result1
       const {data:users} = await result2

        console.log(todos)
        console.log(users)

    }catch(error){
      console.log(error)
    }
   
}

//async3()

async function async4() {


       await Promise.all([
         (
           async()=>{
              const result1 = await  axios.get("https://jsonplaceholder.typicode.com/todos")
              console.log(result1.data)
           }
         )(),
         (
           async()=>{
              const result1 = await axios.get("https://jsonplaceholder.typicode.com/users")
               console.log(result1.data)
           }
         )(),
       ])
      console.log("Bitti")
   
}

async4()
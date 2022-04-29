let task1=()=>{
    return new Promise((resolve,reject)=>{
        resolve("HI,task1 is 'okk")
    })
}

let task2=()=>

{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("HI,task2 is 'okk")

    },3000)
       
    })
}



let task3=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("HI,task3 is 'okk")
        },2500)
        
    })
}


let task4=()=>{
    return new Promise((resolve,reject)=>{
        resolve("HI,task4 is 'okk")
    })
}

task1()
.then(res=>{
    console.log(res)
})

.then(task2)
.then(res=>{
    console.log(res)
})

.then(task3)
.then(res=>{
    console.log(res)
})

.then(task4)
.then(res=>{
    console.log(res)
});
// async function func1() {
//   console.log('aaa')
// }
// let result = func1()

// console.log(result)

// result.then((data) => {
//   console.log(data)    // aaa
// })

function func1(x) {
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve(x)
    }, 2000)
  })
}

async function func2 () {
  let x = await func1(10)
  console.log(x)    // 10
}

func2()
//第一种方法
// const arr1 = [3, 1, 1, 2, 5,3, 2, 5]
// //利用map数组去重
// const deduplication =arr =>{
//   let map = new Map()
//   arr.forEach(item=>{
//     map.set(item,1)
//   })
//   return [...map.keys()]
// }
// console.log(deduplication(arr1))

//第二种方法
// const arr2 = [3, 1, 1, 2, 5,3, 2, 5]
// //利用set数组去重
// const deduplication2 =arr =>{
//   return[...new Set(arr)]
// }
// console.log(deduplication2(arr2))

//第三种方法
//使用reduce数组去重
//  const arr3 = [3, 1, 1, 2, 5,3, 2, 5]
//
// const deduplication3=arr3=>arr3.reduce((pre,current)=>pre.includes(current)?pre:[...pre, current],[])
// console.log(deduplication3(arr3))


//第四种方法
//使用filter数组去重
// const arr4 = [3, 1, 1, 2, 5,3, 2, 5]
// const deduplication4=arr4=>arr4.filter((item,index)=>arr4.indexOf(item)===index)
//
// console.log(deduplication4(arr4))

//第五种方法

// const arr5 = [3, 1, 1, 2, 5,3, 2, 5]
// const deduplication5=arr5=>arr5.sort((a,b)=>a-b).reduce((pre,current)=>pre.includes(current)?pre:[...pre, current],[])
//
// console.log(deduplication5(arr5))

//第六种方法 在原数组上进行去重，for循环
//  const arr6 = [3, 1, 1, 1,2,2, 5,3, 2, 5]

// const deduplication6=arr6=>{
//   let hash={}
//   for(let i=0;i<arr6.length;i++){
//     if (!hash[arr6[i]]){
//       hash[arr6[i]]=true
//     }else{
//       arr6.splice(i,1)
//       i--
//     }
//   }
//   return arr6
// }
// let arr7=deduplication6(arr6)
// // console.log(deduplication6(arr6))
// console.log(arr7===arr6)

//实现函数柯里化封装
// function curry(fn){
//   let arr= []
//   return function curried(...args){
//     arr = [...arr,...args]
//     if(arr.length>=fn.length){
//       return fn(...arr)
//     }
//     return curried
//   }
// }


// function sum(a, b, c, d) {
//   return a + b + c + d;
// }

// let sum2 = curry(sum)
// let sum3 = curry(sum)

// console.log(sum2(1)(2)(2,3))
// console.log(sum3(4)(5)(6)(5))


//一个函数柯里化示例
function sum(a,b){
  return a+b
}

console.log(sum(1,2))


// function sum2(a){
//   return function(b){
//     return a+b
//   }
// }

sum2=a=>b=>a+b


console.log(sum2(5)(5))


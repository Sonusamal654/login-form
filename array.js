// let arr=[]
// function sumArr(nums){
//     let result=0;
//     for(let i=0;i<=nums.length-1;i++){
//         result=result+nums[i];
        
//     }
//     return result;

// }
// console.log(sumArr(arr));
// swap array
// function swapArr(arr,index1,index2){
//     let temp=arr[index1];
//     arr[index1]=arr[index2];
//     arr[index2]=temp;
//     return arr;
// }
// console.log(swapArr([1,2,3],0,2));
// function swapArr(arr,index1,index2){
//     for(let i=0;i<length;i++);{
//     let temp=arr[index1];
//     arr[index1]=arr[index2];
//     arr[index2]=temp;
//     }
//     return arr;
// }
// console.log(swapArr([1,2,3,4,5,6],));
// let calc=(args)=>{
//     let result=0;
//     for(let i=0;i<args.length;i++){
//         result=result+args[i];
//     }
//     return result;
// }
// console.log(calc([10,20,30]));
// function reverseArr(arr){
//   let start=0;
//   let end=arr.length-1;
//   while(start<end){
//     let temp=arr[start];
//     arr[start]=arr[end];
//     arr[end]=temp;
//     start++;
//     end--;

//   }
//   return arr;
// }
// console.log(reverseArr(1,2,3,4,5,6));
// largest Array
let nums=[20,30,40,50]
function findlargestNumber(arr){
        let largest=0;
        for(i=0;i<=arr.length-1;i++){
          largest=arr[i];
        }
        return largest;
}
console.log(findlargestNumber(nums));
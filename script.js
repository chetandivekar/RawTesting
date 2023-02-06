let arr = [1,3,5,6,9,13,56];
let key  = 56
function binarySearch(arr,key,start,end){
    let mid = (start+end)/2;
    if(start>end){
        return -1
    }
    else{
        if(key == arr[mid]){
            return mid;
        }
        else if(key < arr[mid]){
            return binarySearch(arr,key,start,mid-1)
        }
        else{
            return binarySearch(arr,key,mid+1,end)
        }
    }
}
let ans = binarySearch(arr , key , 0, arr.length-1)
console.log(ans);
const rotateFunction=(rotationNumber,arr)=>{
    while(rotationNumber){
        let x=arr.shift();
        arr.push(x);
        rotationNumber--;
    }
    return arr;
}
const rotateLeft=(size,rotationNumber,arr)=>{
    if(size===rotationNumber && size===1){
       return arr;
    } 
    else if(rotationNumber>size){
        let rotationNeed=rotationNumber%size;
        return rotateFunction(rotationNeed,arr);
    }  
    else{
        return rotateFunction(rotationNumber,arr);
    }
  
}


// let ar=[1,2,3,4,5];
// let rotateNum=4;
// let rotation=rotateLeft(ar.length,rotateNum,ar);
// console.log(rotation);
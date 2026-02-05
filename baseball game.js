var calPoints = function(operations) {
    var sum = [];
      for(let i=0; i<operations.length; i++){

        let curr =operations[i];

        if(!isNaN(curr)){//is not a num (isNaN("5") => false (because "5" can be converted to number 5))
            sum.push(parseInt(curr));//parseInt that converts to int to str
        }
        else if(curr=="C"){
            sum.pop();
        }
        else if(curr=="D"){
            sum.push(2*sum[sum.length-1]);
        }
        else if(operations[i]==="+"){
            sum.push(sum[sum.length-1] + sum[sum.length-2]);
        }
    }
    let val =0;
    for(num of sum) {
        val += num;
    }
    return val
};
const operations = ["5","5","+","C"];
console.log(calPoints(operations))
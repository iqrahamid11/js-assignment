// q no 3 

// function clearRow(){
//     document.getElementById(table).deleteRoe(0)
// }

// q no 5

function incrementButton(){
    var element =document.getElementById('incrementText');
    var value = element.innerHTML;

    ++value;
    console.log(value);
    document.getElementById('incrementText').innerHTML = value
}

function decrementButton(){
    var element =document.getElementById('decrementText');
    var num = element.innerHTML;

    --num;
    console.log(num);
    document.getElementById('decrementText').innerHTML = num
}

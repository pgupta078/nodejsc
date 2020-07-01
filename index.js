var rect = require('./rectangle');
function solveRect(l,b){
        console.log('solving for rectangle area with l=' + l + 'and w =' + b)
    if (l <= 0 || b <= 0){
        console.log('incorrect values,kindly enter greater > 0 values');
    }
    else{
        console.log("the area of rectangle is"+ rect.area(l,b) );
        console.log("the parameter of rectangle is"+ rect.perimeter(l,b) );
    }
};
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,4);
import ast=AST;
module M {
    export var ast=AST;

    var x:number;

    var y = (x === 10)?1:2;

    var zz = (y===4);

    var z=y;

    var a,b;

    switch(x) {
        case 1:break;
        default:break;
    }

    for(x = 1;x <2; ++x) {
        goto:console.log("hi");
    }

    while(i < 1) {
        ++i;
    }

    var q;
    q.forEach(()=>3);
    q.forEach(()=>{
        return 3;
    });

    var r: ()=>string;
    var s: new ()=>string;
    var a = <number>"10";
    var a = <number> "10";
}

var a;

export=a;

a.then(() => {
    return 1;
}).if(() => {
    return 1;
});

var name = "something";
var test = `
<sl-property-group label=${name} Axes">
  <div class="repeat"
`;

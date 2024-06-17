let cname="FullStack";
let price=500;
let goals=["gitGud","knowHowtoBuildweb","stayUpdated"];
let group={name:cname,money:price,aim:goals};
alert(cname);
alert(price);
alert(goals);
alert(group.name);
alert(goals[2]);

function display(y,x){
    let ret=y[x];
    return ret;

};
let out=display(goals,0);
alert(out);
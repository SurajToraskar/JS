let a=0;
let ask=window.prompt("Enter The Number Of Times You Want To Use:");
ask=Number(ask);
while(a<ask){
let number=window.prompt("Enter The Number");
let choose=window.prompt("Enter The Choose ");
choose=Number(choose);


switch(choose){
    case 1:
        console.log("Using For Loop");
        for(let i=0;i<=10;i+=1){
            console.log(`${number} * ${i} = ${number*i}`);
        }
        break;
    case 2:
        console.log("Using While Loop");
        let a=1
        while(a<=10){
            console.log(number," * ",a," = ",number*a);
            a+=1
        }
        break;
    case 3:
        console.log("Using Do-While Loop")
        let b=0;
        do{
            console.log(number," * ",b," = ",number*b);
            b+=1
        }while(b<=10);
        break;
    default:
        console.log("Invalid");
        break;
}
a+=1
}

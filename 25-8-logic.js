//1.........output :[11,22,121]

// method-1........
let a=[1,11,22,3,7,121]
for (i=0;i<a.length;i++){
    if(a[i]%11==0){
        console.log(a[i]);
    }else{
        console.log("not");
    }
}


// 2.method............



let a=[1,11,22,3,7,121]
let b=a.filter((v,i)=>{
    return v%11==0
})
console.log(b)


// 2.odd even


var a=7;
if(a%2===0){
	console.log("even")
}else{
	console.log("odd")
	
}


// 3........average



var a=123
let average=0;
let sum=0;
x=(x-rem)/10

while(x!=0){
	average++;
	var rem=x%10;
	x=(x-rem)/10
	sum=sum+rem
}
console.log(sum)

var ans=ssum/average
console.log(ans)


// 4.......pattern




let a=5;
let b='';
for(i=0;i<=a;i++){
    for(j=0;j<=i;j++){
        b+="*"
    }
    b+="\n"
}
console.log(b)





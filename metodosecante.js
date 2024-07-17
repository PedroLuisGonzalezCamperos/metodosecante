//f(x)=Math.exp(-x)-x, página 179 métodos numéricos

//xf=xi-f(xi)(xil-xi)/(f(xil)-f(xi))

//error = ((valor obtenido-valor anterior)/valor obtenido)*100%


//function funcion1(a) { return Math.exp(-a)-a;}



function funcion1(a) {

return Math.pow(a,2)+2*a-35;


}

function secante(x0,x1,maxiter,tolerancia) {

iter=0;
let error=Number.POSITIVE_INFINITY;

if (funcion1(x0)===0) {

console.log("La raíz es"+x0);

}

if (funcion1(x1)===0) {


console.log("la raiz es"+x1)


}
let arreglo=[];
while (error>tolerancia && maxiter>iter) {

    
x2 = x1-funcion1(x1)*(x0-x1)/(funcion1(x0)-funcion1(x1));

arreglo[iter]=x2;
error=Math.abs(x2-x1);
x0=x1;
 x1=x2;  

 

iter++;
}
console.log(arreglo);
return (x2);
}

console.log(secante(1,3,100,0.01));




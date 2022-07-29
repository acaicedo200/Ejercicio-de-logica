function mayor_menor4() {
    var a1 = parseInt(document.form1.n1.value);
    var a2 = parseInt(document.form1.n2.value);
    var a3 = parseInt(document.form1.n3.value);
    var a4 = parseInt(document.form1.n4.value);

    if(a1<a2 & a1<a3 & a1<a4)     
    {
        document.form1.resultadome.value = a1;
    }
    if(a1==a3<a2  & a1==a3<a4)     
    {
        document.form1.resultadome.value = a1;
    }
    else if(a2<a1 & a2<a3 & a2<a4)    
    {
        document.form1.resultadome.value = a2;
    }
    else if(a3<a1 & a3<a2 & a3<a4)    
    {
        document.form1.resultadome.value = a3;
    }
    else if(a4<a2 & a4<a3 & a4<a1)   
    {
        document.form1.resultadome.value = a4;
    }
   
    if(a1>a2 & a1>a3 & a1>a4)    
    {
        document.form1.resultadom.value = a1;
    }
    else if(a2>a1 & a2>a3 & a2>a4)   
    {
        document.form1.resultadom.value = a2;
    }
    if(a2==a4>a3  & a2==a4>a1)     
    {
        document.form1.resultadom.value = a2;
    }
    else if(a3>a1 & a3>a2 & a3>a4)   
    {
        document.form1.resultadom.value = a3;
    }
    else if(a4>a1 & a4>a2 & a4>a3)    
    {
        document.form1.resultadom.value = a4;
    }
    if (a1==a2 & a1==a3 & a1==a4) {
    
        alert("Todos son iguales");
    }
    else if (a1==a3 & a2==a4){
        alert("Estos numeros "+a1+" y estos "+a2+" son iguales" );
    }
    else if (a4==a3 & a3==a2){
        alert("Los numero "+a4+" son iguales" );
    }

    else if(a1==a3)   
    {
        alert("Estos numeros "+a1+" son iguales" );

    }
    else if(a1==a4)    
    {
        alert("Estos numeros "+a1+" son iguales" );
    }
    else if(a2==a1)   
    {
        alert("Estos numeros "+a2+" son iguales" );
    }
    else if(a2==a3)    
    {
        alert("Estos numeros "+a2+" son iguales" );
    }
    else if(a2==a4)   
    {
        alert("Estos numeros "+a2+" son iguales" );
    }
    else if(a3==a1)    
    {
        alert("Estos numeros "+a3+" son iguales" );
    }
    else if(a3==a2)    
    {
        alert("Estos numeros "+a3+" son iguales" );
    }
    else if(a3==a4)   
    {
        alert("Estos numeros "+a3+" son iguales" );
    }
    else if(a4==a2)   
    {
        alert("Estos numeros "+a4+" son iguales" );
    }
    else if(a1==a2 & a3==a4)
    {
        alert("Estos numeros "+a1+" y estos "+a3+"son iguales" );
   }
   else if(a2==a3 & a1==a4)
    {
        alert("Estos numeros "+a2+" y estos "+a1+"son iguales" );
   }


}
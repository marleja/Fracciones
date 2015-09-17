 alert(" CALCULADORA DE FRACCIONES ");
  
 fraccion1=prompt('Ingrese Fraccion 1', '');
 fraccion2=prompt('Ingrese Fraccion 2', '');
 var fraccion1a = fraccion1.split("/"); 
 var fraccion1b = fraccion2.split("/");
 resden=fraccion1a[1]*fraccion1b[1];
 resnum=(fraccion1a[0]*fraccion1b[1])+ (fraccion1a[1]*fraccion1b[0]);
 resultado= resnum +"/" + resden;
 alert ("El resultado de la Suma es: " +simplificar(resultado));
 
 resden=fraccion1a[1]*fraccion1b[1];
 resnum=(fraccion1a[0]*fraccion1b[1])- (fraccion1a[1]*fraccion1b[0]);
 resultado= resnum +"/" + resden;
 alert ("El resultado de la Resta es: " +simplificar(resultado));
 
  
 resnum=(fraccion1a[0]*fraccion1b[0]);
 resden=fraccion1a[1]*fraccion1b[1];
 resultado= resnum +"/" + resden;
 alert ("El resultado de la Multiplicacion es: " +simplificar(resultado));
 
 
 resnum=(fraccion1a[0]*fraccion1b[1]);
 resden=fraccion1a[1]*fraccion1b[0];
 resultado= resnum +"/" + resden;
 alert ("El resultado de la Division es: " +simplificar(resultado));

 
 function simplificar(val)
{
   var parteVal = val.split("/");
   var numerador = Number(parteVal[0]);
   var denominador = Number(parteVal[1]);
   var maximo = numerador <= denominador ? numerador : denominador;
   var cont = 2;
   do
   {
       if(numerador % cont === 0 && denominador % cont === 0)
       {
           numerador /= cont; // numerador = numerador / cont;
           denominador /= cont;
           maximo = numerador <= denominador ? numerador : denominador;
       }
       else
       {
           cont++;
           if(cont > maximo)
           {
               break;
           }
       }
   }while(1);
   var respuesta = numerador + "/" + denominador;
   if(denominador === 1)
   {
       respuesta = numerador;
   }else if(denominador === 0){
	   respuesta  = "Error division por cero";
	   }else if(numerador === 0){
		   respuesta = 0;
		   
		   }
   return respuesta;
};
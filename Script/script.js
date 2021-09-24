
 let categoriaBajoPeso=[];
 let categoriaSaludable=[];
 let categoriaSobrepeso=[];
 let categoriaObeso=[];
 let categoriaObesoExtremo=[];
 let usuarios=[];
 let usuario={sexo1:"",
    edad1:"",
    peso1:"",
    altura1:"",
    imc1:""
       }
//para hacer estadisticas



function calcular(){
    
    let sexo=document.getElementById("sexo").value;
    let edad=document.getElementById("edad").value;
    let peso=document.getElementById("peso").value;
    let altura=document.getElementById("altura").value;

    let imc=(peso/(altura*2)).toFixed(2);
    console.log(imc); 
    let resultado=imc;
    document.getElementById("salida").innerHTML=resultado;
    
    usuario.sexo1=sexo;
    usuario.edad1=edad;
    usuario.peso1=peso;
    usuario.altura1=altura;
    usuario.imc1=imc;
    if(usuario.imc1<=18.5){
        categoriaBajoPeso.push(usuario);
        //console.log(categoriaBajoPeso);
     }else if(usuario.imc1>=18.5 && usuario.imc1<=24.9){
         categoriaSaludable.push(usuario);                  
     }else if(usuario.imc1>=25 && usuario.imc1<=29.9){
         categoriaObeso.push(usuario);
     }else if(usuario.imc1>=30 && usuario.imc1 <=39.9){
         categoriaSobrepeso.push(usuario);
     }else if(usuario.imc1 >=40){
         categoriaObesoExtremo.push(usuario)
     }

    let cantidadBajopeso=categoriaBajoPeso.length;
    let cantidadSaludable=categoriaSaludable.length;
    let cantidadSobrepeso=categoriaSobrepeso.length;
    let cantidadObeso=categoriaObeso.length;
    let cantidadObesoExtremo=categoriaObesoExtremo.length;
    usuarios.push(usuario);
   
    document.getElementById("bajo").innerHTML=cantidadBajopeso;
    document.getElementById("saludable").innerHTML=cantidadSaludable;
    document.getElementById("sobrepeso").innerHTML=cantidadSobrepeso;
    document.getElementById("obeso").innerHTML=cantidadObeso;
    document.getElementById("super").innerHTML=cantidadObesoExtremo;
    //para estadisticas
    
     
    console.log(cantidadBajopeso);  
    console.log(cantidadSaludable);
    console.log(cantidadSobrepeso);
    console.log(cantidadObeso);
    console.log(cantidadObesoExtremo);

    console.log(usuarios);
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);
    
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart(){
    
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['PESO BAJO', cantidadBajopeso],
          ['SALUDABLE', cantidadSaludable],
          ['SOBREPESO', cantidadSobrepeso],
          ['OBESO', cantidadObeso],
          ['SUPER GORDO', cantidadObesoExtremo]
        ]);
      
        // Set chart options
        var options = {'title':'MIS ESTADISTICAS',
                       'width':400,
                       'height':200};
      
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);   
      }
    
    for(let i=0;i<usuarios.length;i++){
        
        localStorage.setItem(`usuario `+JSON.stringify(i),JSON.stringify(usuarios[i]));
        }
}

function limpiar(){
    document.getElementById("edad").value="";
    document.getElementById("peso").value="";
    document.getElementById("altura").value="";
    document.getElementById("salida").innerHTML="";
}



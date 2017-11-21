/*** VARIEBLES DE SIMULACIÓN ***/
var memoria = null; //variable para Objeto Memoria
var procesos = [];  //lista de procesos
var contadorProceso = 0; //contador de procesos

/* Otros */
var contPP=0; //Principal.
var contSec=0; //Secundaria.
var contP=0; //Procesos.
var id_fila_selected=[];
var filasSec = $('#tabMemSec tr').length;

/* Iniciar Simulación */

function iniciarSimulacion(){
	$('#iniciar').prop('disabled',false);
}


function iniciarInstalacion(){
	var campo1 = $('#tamMemP').val();
	var campo2 = $('#tamMemS').val();
	var campo3 = $('#tamPag').val();

	if(campo1 === '' || campo2 === '' || campo3 === '' ){
		alert("Campos vacíos.");
		return false;
	}else{
		var camp1 = parseInt(campo1);
		var camp2 = parseInt(campo2);
		var camp3 = parseInt(campo3);

		if((camp1<camp3)||(camp2<camp3)){
			alert('El tamaño de página debe ser menor.');
			return false;
		}else{

			var tamanioDeMemoria = parseInt(document.getElementById("tamMemP").value);
			var tamanioSecundario = parseInt(document.getElementById("tamMemS").value);
			var tamanioPagina = parseInt(document.getElementById("tamPag").value);
			alert('Memoria principal: '+ tamanioDeMemoria + '\nMemoria secundaria: ' + tamanioSecundario + '\nTamaño de Página: ' + tamanioPagina);
			
			var numeroDeMarcos = Math.round(tamanioDeMemoria/tamanioPagina);
			//Dir fisica
			var tamanioPaginaHexa = tamanioPagina.toString(16);
			var dirFisica='0';
			var aux=null;

			for(var i=0; i<numeroDeMarcos;i++){
				agregarTablaMemoriaPrincipal(dirFisica);
				aux=parseInt(dirFisica,16)+parseInt(tamanioPaginaHexa,16);
				dirFisica=aux.toString(16);
			};

			var numeroAlmacenamiento = Math.round(tamanioSecundario/tamanioPagina);

			for(var j=0; j<numeroAlmacenamiento ;j++){
				agregarTablaMemoriaSec();
			};		
			//Estadisticos
			asignarEstadisticos(tamanioDeMemoria,tamanioDeMemoria,0,numeroDeMarcos,tamanioPagina,tamanioSecundario,tamanioSecundario);

			$('#nuevoProcesoBtn').prop('disabled', false);
			$('#iniciar').prop('disabled', true);

		}
	}

}

/* Tabla memoria principal */
function agregarTablaMemoriaPrincipal(dirFisica){
		contPP++;
		var fila='<tr class="selected" id="fila'+contPP+'" onclick="seleccionar(this.id);"><td>0x'+dirFisica+'</td><td>'+contPP+'</td><td></td><td></td><td></td></tr>';
		$('#tabMemPri').append(fila);
		reordenarTablaMemoriaPrincipal();
}

function reordenarTablaMemoriaPrincipal(){
		var num=1;
		$('#tabMemPri tbody tr').each(function(){
			$(this).find('td').eq(1).text(num);			
			num++;
		});
}

/* Tabla memoria secundaria */
function agregarTablaMemoriaSec(){
		contSec++;
		var fila='<tr class="selected" id="fila'+contSec+'" onclick="seleccionar(this.id);"><td>'+contSec+'</td><td></td><td></td><td></td></tr>';
		$('#tabMemSec').append(fila);
		reordenarTablaMemoriaSec();
}

function reordenarTablaMemoriaSec(){
		var num=1;
		$('#tabMemSec tbody tr').each(function(){
			$(this).find('td').eq(0).text(num);
			num++;
		});
}

function agregarProcesoMemP(numPag,nomPro,idPro){
		var cargadas=0;
		var texto='';

		$('#tabMemPri tbody tr').each(function(){
				texto=$(this).find('td').eq(2).text();
				if( (texto === '' && numPag>cargadas) || (texto===' ' && numPag>cargadas)){
					$(this).find('td').eq(2).text(idPro);
					$(this).find('td').eq(3).text(nomPro);
					$(this).find('td').eq(4).text(cargadas);
					cargadas++;
				}
		});

		actualizarEstadisticos(numPag,cargadas,0);
	return cargadas; //Retorna paginas cargadas en MP
}

function agregarProcesoMemS(corPag,nomPro,idPro,numPag){
		var texto='';

		$('#tabMemSec tbody tr').each(function(){
				texto=$(this).find('td').eq(1).text();
				if((texto === '' && numPag>corPag) || (texto===' ' && numPag>corPag)){
					$(this).find('td').eq(1).text(idPro);
					$(this).find('td').eq(2).text(nomPro);
					$(this).find('td').eq(3).text(corPag);
					corPag++;
				}
		});
		filasSec++;
	return (numPag-corPag); //Desbordamiento
}


/* Crear Proceso */
function crearProceso(){
	var campo1 = $('#nomProCrear').val();
	var campo2 = $('#tamProCrear').val();
	var campo = $('#tamMemS').val();
    
	if(campo1 === '' || campo2 === ''){
		alert('Campos vacíos.');
		return false;
	}else{
		var camp = parseInt(campo)
		var camp2 = parseInt(campo2);
		if(camp < camp2){
			alert("La memoria secundaria es menor que el proceso");
			return false;
		}else{
			alert('Proceso: ' + campo1 + '\nTamaño: ' + campo2 );
			$('#tabProcesElim').prop('disabled', true);
			$('#tabProcesListo').prop('disabled', true);
			$('#tabProcesSus').prop('disabled', true);
			$('#termSimBtn').prop('disabled', false);
			agregarProceso1();		
			
		}
	}
}

var n=1;
function agregarProceso(){
	contP++;	
	var nombre = $('#nomProCrear').val();
	var tamProc = $('#tamProCrear').val();
	var paginas = cantidadPaginas(tamProc);
	var	cargadasMP = agregarProcesoMemP(paginas,nombre,contP);
	var cargadasMS = paginas - cargadasMP;
	var estado='';
	var incapAlmacenaje=0;
	if (cargadasMS>0){
		if (cargadasMP==0) {
			incapAlmacenaje = agregarProcesoMemS(cargadasMP,nombre,contP,paginas);//Fifo
			if (incapAlmacenaje>0) {
				alert("El proceso tiene demasiado tamaño para ser cargado.");

			}else {
			    //Actulizar estadisticos
			    actualizarEstadisticos(paginas,cargadasMP,cargadasMS);				
			}
		}else {
			incapAlmacenaje = agregarProcesoMemS((cargadasMP),nombre,contP,paginas);
			if (incapAlmacenaje>0) {
				alert("El proceso tiene demasiado tamaño para ser cargado.");
			}else {
			    //Actulizar estadisticos
			    actualizarEstadisticos(paginas,cargadasMP,cargadasMS);				
			}		
		}

		
	}
	if(cargadasMP==0){
		if(incapAlmacenaje>0){	
		estado="Desbordamiento";
		var fila='<tr class="selected" id="fila'+contP+'" onclick="seleccionarPro(this.id);"><td>'+contP+'</td><td>'+nombre+'</td><td>'+tamProc+'</td><td>'+paginas+'</td><td>'+estado+'</td><td>'+estado+'</td><td>'+estado+'</td></tr>';
		$('#tabProces').append(fila);					
		}else {
			estado="Espera";
			var fila='<tr class="selected" id="fila'+contP+'" onclick="seleccionarPro(this.id);"><td>'+contP+'</td><td>'+nombre+'</td><td>'+tamProc+'</td><td>'+paginas+'</td><td>'+estado+'</td><td>'+cargadasMP+'</td><td>'+cargadasMS+'</td></tr>';
			$('#tabProces').append(fila);
		}

	}else{
		estado="Activa";

		var fila='<tr class="selected" id="fila'+contP+'" onclick="seleccionarPro(this.id);"><td>'+contP+'</td><td>'+nombre+'</td><td>'+tamProc+'</td><td>'+paginas+'</td><td>'+estado+'</td><td>'+cargadasMP+'</td><td>'+cargadasMS+'</td></tr>';
		$('#tabProces').append(fila);
	}


	reordenarProceso();
	n++;
	$('#nomProCrear').val('Proceso '+ n);
}

function agregarProceso1(){
	contP++;	
	var nombre = $('#nomProCrear').val();
	var tamProc = parseInt($('#tamProCrear').val());
	var paginas = cantidadPaginas(tamProc);
	var cantMemPDis=parseInt($('#estMemDis').text());
	var cantMemSDis =parseInt( $('#estMemSecDis').text());
	var tamPag = parseInt($('#estTamPag').text());

	if (tamProc<=cantMemPDis) {
		//Cargar en MP
		var	cargadasMP = agregarProcesoMemP(paginas,nombre,contP);
		var fila='<tr class="selected" id="fila'+contP+'" onclick="seleccionarPro(this.id);"><td>'+contP+'</td><td>'+nombre+'</td><td>'+tamProc+'</td><td>'+paginas+'</td><td>'+'Activa'+'</td><td>'+cargadasMP+'</td><td>'+(paginas-cargadasMP)+'</td></tr>';
		$('#tabProces').append(fila);
		if (cargadasMP==paginas) {
			alert("El proceso "+nombre+" fue cargado a MP.");	
		}else {
			alert("Error.! El proceso "+nombre+"no fue cargado a MP.");
		}
		
	}else {
		if (tamProc<=(cantMemPDis+cantMemSDis)) {
			cargadasMS = fifo(cantMemPDis,cantMemSDis,tamPag,paginas,nombre,contP);
			var fila='<tr class="selected" id="fila'+contP+'" onclick="seleccionarPro(this.id);"><td>'+contP+'</td><td>'+nombre+'</td><td>'+tamProc+'</td><td>'+paginas+'</td><td>'+'Activa'+'</td><td>'+(paginas-cargadasMS)+'</td><td>'+cargadasMS+'</td></tr>';
			$('#tabProces').append(fila);
			alert('Algoritmo de reemplazamiento FIFO.');
		}else {
			alert(" EL Proceso"+nombre+"supera toda la capcidad de almacenamiento disponible.");
		}
	}

	reordenarProceso();
	n++;
	$('#nomProCrear').val('Proceso '+ n);

}

function actualizarEstadisticos(pagProc,cargadasMP,cargadasMS){
    var capMemP =parseInt($('#estCantMem').text());
    var cantMemPDis=parseInt($('#estMemDis').text());
    var cantMemPUsa=parseInt($('#estMemUsa').text());
    var marcosMP = parseInt($('#estMarPag').text());
    var tamPag = parseInt($('#estTamPag').text());
    var capMemS = parseInt($('#estTamMemSec').text());
    var cantMemSDis =parseInt( $('#estMemSecDis').text());

    asignarEstadisticos(capMemP,(cantMemPDis-(cargadasMP*tamPag)),(cantMemPUsa+(cargadasMP*tamPag)),marcosMP,tamPag,capMemS,(cantMemSDis-(cargadasMS*tamPag)));
}


function seleccionarPro(id_fila)
{
	var numx = id_fila.length;	
	if($('#'+id_fila).hasClass('seleccionada'))
		{  
		  $('#'+id_fila).removeClass('seleccionada');
		  $('#tabProcesElim').prop('disabled',true);  
		  $('#tabProcesListo').prop('disabled', true);
		  $('#tabProcesSus').prop('disabled', true);
		  $('#procesActual').text('x');  
		}
	else 
	{
		$('#'+id_fila).addClass('seleccionada');		
		$('#procesActual').text('Proceso '+ id_fila[numx-1]);
		$('#tabProcesElim').prop('disabled',false);
		$('#tabProcesListo').prop('disabled', false);
		$('#tabProcesSus').prop('disabled', false);
	}	
    id_fila_selected=id_fila;
}

function eliminarPro(id_fila)
{   
	
    idPro1 = $('#'+id_fila).find('td').eq(0).text();
    pags = parseInt($('#'+id_fila).find('td').eq(0).text());
    pagsP = parseInt($('#'+id_fila).find('td').eq(5).text());
    pagsM = parseInt($('#'+id_fila).find('td').eq(6).text());

    actualizarEstadisticos(0,pags,-pagsP,-pagsM);

    $('#tabProcesBody #'+id_fila).remove();
    $('#tabProcesElim').prop('disabled',true);
    $('#tabProcesListo').prop('disabled',true);
    $('#tabProcesSus').prop('disabled',true);
	var texto='';

	for (var i = 0 ; i <= pags; i++) {

		$('#tabMemPri tbody tr').each(function(){
			texto=$(this).find('td').eq(2).text();
			if(texto === idPro1){
				$(this).find('td').eq(2).text(' ');
				$(this).find('td').eq(3).text(' ');
				$(this).find('td').eq(4).text(' ');
			}
		});

		$('#tabMemSec tbody tr').each(function(){
			texto=$(this).find('td').eq(1).text();
			if(texto === idPro1){
				$(this).find('td').eq(1).text(' ');
				$(this).find('td').eq(2).text(' ');
				$(this).find('td').eq(3).text(' ');
			}
		});
	};

}

function listo(id_fila){
	idPro1 = $('#'+id_fila).find('td').eq(0).text();
	idPro = parseInt(idPro1);
	nomPro = $('#'+id_fila).find('td').eq(1).text();
	tamPro1 = $('#'+id_fila).find('td').eq(2).text();
	tamPro = parseInt(tamPro1);
	espera1 = $('#'+id_fila).find('td').eq(4).text();
	espera = espera1.toLowerCase();
	if(espera === 'espera'){
		$('#tabProcesElim').click();
		agregarProcesoListo(idPro, nomPro, tamPro);
	}else{
		alert("El proceso esta activo.");
	}

}

function suspender(id_fila){
	var car=0;
	idPro2 = $('#'+id_fila).find('td').eq(0).text();
	idPro = parseInt(idPro2);
	nomPro = $('#'+id_fila).find('td').eq(1).text();
	tamPro1 = $('#'+id_fila).find('td').eq(3).text();
	tamPro = parseInt(tamPro1);
	activo1 = $('#'+id_fila).find('td').eq(4).text();
	activo = activo1.toLowerCase();
	if(activo === 'activa')
	{
		activo1 = $('#'+id_fila).find('td').eq(4).text('espera');
		idPro1 = $('#'+id_fila).find('td').eq(0).text();
        pags = parseInt($('#'+id_fila).find('td').eq(0).text());
        pagsP = parseInt($('#'+id_fila).find('td').eq(5).text());
        pagsM = parseInt($('#'+id_fila).find('td').eq(6).text());

        actualizarEstadisticos(0,pags,-pagsP,-pagsM);
        $('#tabProcesElim').prop('disabled',true);
        $('#tabProcesListo').prop('disabled',true);
        $('#tabProcesSus').prop('disabled',true);
	    var texto='';
	   for (var i = 0 ; i <= pags; i++) {

		$('#tabMemPri tbody tr').each(function(){
			texto=$(this).find('td').eq(2).text();
			if(texto === idPro1){
				$(this).find('td').eq(2).text(' ');
				$(this).find('td').eq(3).text(' ');
				$(this).find('td').eq(4).text(' ');
			}
		});		
	};
   }
   $('#tabMemSec tbody tr').eq(filasSec).each(function(){	
			$(this).find('td').eq(1).text(idPro2);
			$(this).find('td').eq(2).text(nomPro);
			$(this).find('td').eq(3).text(tamPro);
		});
    filasSec++;
}

function agregarProcesoListo(idPro, nomPro, tamPro){
	contP++;	
	var nombre = nomPro;
	var tamProc = tamPro;
	var paginas = cantidadPaginas(tamProc);
	var	cargadasMP = agregarProcesoMemP(paginas,nombre,contP);
	var cargadasMS = paginas - cargadasMP;
	var estado='';
	var incapAlmacenaje=0;
	if (cargadasMS>0){
		if (cargadasMP==0) {
			incapAlmacenaje = agregarProcesoMemS(cargadasMP,nombre,contP,paginas);
			if (incapAlmacenaje>0) {
				alert("El proceso tiene demasiado tamaño para ser cargado.");

			}else {
			    //Actulizar estadisticos
			    actualizarEstadisticos(parseInt(tamProc),paginas,cargadasMP,cargadasMS);				
			}
		}else {
			incapAlmacenaje = agregarProcesoMemS((cargadasMP),nombre,contP,paginas);
			if (incapAlmacenaje>0) {
				alert("El proceso tiene demasiado tamaño para ser cargado.");
			}else {
			    //Actulizar estadisticos
			    actualizarEstadisticos(parseInt(tamProc),paginas,cargadasMP,cargadasMS);				
			}		
		}
		
	}
	if(cargadasMP==0){
		if(incapAlmacenaje>0){	
		estado="Desbordamiento";
		var fila='<tr class="selected" id="fila'+contP+'" onclick="seleccionarPro(this.id);"><td>'+idPro+'</td><td>'+nombre+'</td><td>'+tamProc+'</td><td>'+paginas+'</td><td>'+estado+'</td><td>'+estado+'</td><td>'+estado+'</td></tr>';
		$('#tabProces').append(fila);					
		}else {
			estado="Espera";
			var fila='<tr class="selected" id="fila'+contP+'" onclick="seleccionarPro(this.id);"><td>'+contP+'</td><td>'+nombre+'</td><td>'+tamProc+'</td><td>'+paginas+'</td><td>'+estado+'</td><td>'+cargadasMP+'</td><td>'+cargadasMS+'</td></tr>';
			$('#tabProces').append(fila);
		}

	}else{
		estado="Activa";

		var fila='<tr class="selected" id="fila'+contP+'" onclick="seleccionarPro(this.id);"><td>'+contP+'</td><td>'+nombre+'</td><td>'+tamProc+'</td><td>'+paginas+'</td><td>'+estado+'</td><td>'+cargadasMP+'</td><td>'+cargadasMS+'</td></tr>';
		$('#tabProces').append(fila);
	}
	reordenarProceso();
}

function reordenarProceso(){
	var num=1;
		$('#tabla tbody tr').each(function(){
			$(this).find('td').eq(0).text(num);			
		num++;
	});
}

function cantidadPaginas(tamProc)
{
	var tamañoPag = parseInt($('#tamPag').val()); 
	return Math.ceil(tamProc / tamañoPag); 
}

function asignarEstadisticos(cantMem,memDis,memUsa,marPag,tamPag,tamMemSec,memSecDis){
	$('#estCantMem').text(cantMem);
	$('#estMemDis').text(memDis);
	$('#estMemUsa').text(memUsa);
	$('#estMarPag').text(marPag);
	$('#estTamPag').text(tamPag);
	$('#estTamMemSec').text(tamMemSec);
	$('#estMemSecDis').text(memSecDis);
}

$(document).ready(function() {
	var altura = $('#panelProces').height();
	$('#iniciarPanel').css('height',altura);
	$('#panelEst').css('height',altura);
	$('#opcSimul').css('height',altura);
	$('#tabProcesElim').click(function() {
		eliminarPro(id_fila_selected);
		$('#procesActual').text('X');
	});

	$('#tabProcesListo').click(function() {
		listo(id_fila_selected);
	});

	$('#tabProcesSus').click(function() {
		suspender(id_fila_selected);
	});

});

function fifo(cantMemPDis,cantMemSDis,tamPag,paginas,nombrePro,idPro){
	var menorid = 3000;
	var marMP = parseInt($('#estMarPag').text());
	var idCamb=0;
	var idActual=0;
	var numPagCamb=0;
	var nomCamb='';
	var pro = 0;
	var texto='';
	var idMP=0;
	var cargadasMS=0;
	var paginaCargada=0;
	var cargadaCambMS=0;

for (var k = 0; k <= paginas; k++) {
	paginaCargada=0;
	cargadaCambMS=0;
	menorid = 3000;
	

	if (vaciosMP()) {
	$('#tabMemPri tbody tr').each(function() {
	texto=$(this).find('td').eq(2).text();
	    if((texto === '' && k<paginas && paginaCargada<1) || (texto===' ' && k<paginas && paginaCargada<1)){
	    	$(this).find('td').eq(2).text(idPro);
			$(this).find('td').eq(3).text(nombrePro);
			$(this).find('td').eq(4).text(k);
			actualizarEstadisticos(1,1,0);
			
			paginaCargada=1;
	    }
	});	
	}else {	
	//Extraer el menor id, es el primero en entrar
		for (var i = 0 ; i <= marMP; i++) {

		$('#tabMemPri tbody tr').each(function(){
			idActual=parseInt($(this).find('td').eq(2).text());
			if(idActual<menorid){
				menorid=idActual;
			}
		});
		};

		if (menorid===idPro) {
			//Mandar a MS
			$('#tabMemSec tbody tr').each(function(){
			texto=$(this).find('td').eq(1).text();
			if((texto === '' && k<paginas && paginaCargada<1) || (texto===' ' && k<paginas && paginaCargada<1)){
				$(this).find('td').eq(1).text(idPro);
				$(this).find('td').eq(2).text(nombrePro);
				$(this).find('td').eq(3).text(k);
				actualizarEstadisticos(1,0,1);
				cargadasMS++;
				paginaCargada=1;
				}	
			});		
		}else {
			
		
    	//actualizarEstadisticos(0,pags,-pagsP,-pagsM);
		//Hacer el cambio del menor a MP
		
			$('#tabMemPri tbody tr').each(function(){
				idMP=parseInt($(this).find('td').eq(2).text());
				if(idMP === menorid && (k<paginas) && paginaCargada<1){
					idCamb=parseInt($(this).find('td').eq(2).text());
					nombCamb=$(this).find('td').eq(3).text();
					numPagCamb=parseInt($(this).find('td').eq(4).text());
		
					$(this).find('td').eq(2).text(idPro);
					$(this).find('td').eq(3).text(nombrePro);
					$(this).find('td').eq(4).text(k);
		
					//Mandar a MS
					$('#tabMemSec tbody tr').each(function(){
						texto=$(this).find('td').eq(1).text();
						if((texto === '' && cargadaCambMS<1 )|| (texto===' ' && cargadaCambMS<1)){
							$(this).find('td').eq(1).text(idCamb);
							$(this).find('td').eq(2).text(nombCamb);
							$(this).find('td').eq(3).text(numPagCamb);
							actualizarEstadisticos(1,0,1);
							cargadaCambMS=1;
						}	
					});

					
					paginaCargada=1;			
				}
			});
		}
	}
	} 
	return cargadasMS;	

}

function vaciosMP(){
	var band='';
	var entra =0;
	$('#tabMemPri tbody tr').each(function() {
		band=$(this).find('td').eq(2).text();

		
	    if( band == '' || band ===' '){

	    	entra =1;

	    }
	});

	return (entra==1);
}

function actualizarProcesoFIFO(idPro){
	var idActual=0;
	var pagMP=0;
	var pagMS=0;
	var estado="Espera";
	$('#tabProcesBody tr').each(function() {
		idActual=parseInt($(this).find('td').eq(0).text());
		if (idPro==idActual) {
			pagMP=parseInt($(this).find('td').eq(5).text());
			pagMS=parseInt($(this).find('td').eq(6).text());
		};
	});
}
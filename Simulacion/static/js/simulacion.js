/*** VARIEBLES DE SIMULACIÓN ***/
var memoria = null; //variable para Objeto Memoria
var procesos = [];  //lista de procesos
var contadorProceso = 0; //contador de procesos
var textArea = document.createElement('textarea');
  textArea.cols = 50;
  textArea.rows = 50; 

/* Otros */
var contPP=0; //Principal.
var contSec=0; //Secundaria.
var contP=0; //Procesos.
var id_fila_selected=[];

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
				if(texto === '' && numPag>cargadas ){
					$(this).find('td').eq(2).text(idPro);
					$(this).find('td').eq(3).text(nomPro);
					$(this).find('td').eq(4).text(cargadas);
					cargadas++;
				}
		});
	return cargadas;
}

function agregarProcesoMemS(corPag,nomPro,idPro,numPag){
		var texto='';

		$('#tabMemSec tbody tr').each(function(){
				texto=$(this).find('td').eq(1).text();
				if(texto === '' && numPag>corPag ){
					$(this).find('td').eq(1).text(idPro);
					$(this).find('td').eq(2).text(nomPro);
					$(this).find('td').eq(3).text(corPag);
					corPag++;
				}
		});
	return (numPag-corPag);
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
			$('#tabProcesElim').prop('disabled', false);
			$('#tabProcesListo').prop('disabled', false);
			$('#tabProcesSus').prop('disabled', false);
			$('#termSimBtn').prop('disabled', false);
			agregarProceso();		
			
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
			incapAlmacenaje = agregarProcesoMemS(cargadasMP,nombre,contP,paginas);
			if (incapAlmacenaje>0) {
				alert("El proceso tiene demasiado tamaño para ser ejecutado.");

			};
		}else {
			incapAlmacenaje = agregarProcesoMemS((cargadasMP),nombre,contP,paginas);
			if (incapAlmacenaje>0) {
				alert("El proceso tiene demasiado tamaño para ser ejecutado.");
			};			
		}

		
	}
	if(cargadasMP==0){
		estado="Espera";
	}else{
		estado="Activa";
	}
	var fila='<tr class="selected" id="fila'+contP+'" onclick="seleccionarPro(this.id);"><td>'+contP+'</td><td>'+nombre+'</td><td>'+tamProc+'</td><td>'+paginas+'</td><td>'+estado+'</td><td>'+cargadasMP+'</td><td>'+cargadasMS+'</td></tr>';
	$('#tabProces').append(fila);
	reordenarProceso();
	n++;
	$('#nomProCrear').val('Proceso '+ n);
}

function seleccionarPro(id_fila)
{
	var numx = id_fila.length;	
	if($('#'+id_fila).hasClass('seleccionada'))
		{
		  $('#'+id_fila).removeClass('seleccionada');		  
		}
	else 
	{
		$('#'+id_fila).addClass('seleccionada');		
		$('#procesActual').text(id_fila[numx-1]);
	}	
    id_fila_selected=id_fila;
}

function eliminarPro(id_fila)
{
	$('#'+id_fila).remove();
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
	/*if(tamaño1 % tamañoPagina1 != 0)
		{
			return (Math.ceil(tamaño1/tamañoPagina1)+1);
		}*/
	return Math.round(tamProc / tamañoPag); 
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
});
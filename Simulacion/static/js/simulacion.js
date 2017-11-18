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
	$('#iniciar').prop('disabled', false);
}

/*$(document).ready(function(){
		$('#bt_add').click(function(){
			agregar();
		});
		$('#bt_del').click(function(){
			eliminar(id_fila_selected);
		});
		$('#bt_delall').click(function(){
			eliminarTodasFilas();
		});
		

});*/

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

			for(var i=0; i<numeroDeMarcos;i++){
				agregarTablaMemoriaPrincipal();
			};

			var numeroAlmacenamiento = Math.round(tamanioSecundario/tamanioPagina);

			for(var j=0; j<numeroAlmacenamiento ;j++){
				agregarTablaMemoriaSec();
			};		

			$('#nuevoProcesoBtn').prop('disabled', false);
			$('#iniciar').prop('disabled', true);

		}
	}

}

/* Tabla memoria principal */
function agregarTablaMemoriaPrincipal(){
		contPP++;
		var fila='<tr class="selected" id="fila'+contPP+'" onclick="seleccionar(this.id);"><td></td><td>'+contPP+'</td><td></td><td></td><td></td></tr>';
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

function agregarProceso(){
	contP++;
	var fila='<tr class="selected" id="fila'+contP+'" onclick="seleccionar(this.id);"><td>'+contP+'</td><td></td><td></td><td></td></td><td></td><td></td><td></td></tr>';
	$('#tabProces').append(fila);
	reordenarProceso();
}

function reordenarProceso(){
	var num=1;
		$('#tabla tbody tr').each(function(){
			$(this).find('td').eq(0).text(num);
		num++;
	});
}
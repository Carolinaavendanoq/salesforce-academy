document.querySelectorAll(".fecha-elegida").forEach(fechita => fechita.addEventListener("change", e => {
    const identificador = e.target.getAttribute("id");
    let fecha = document.getElementById(identificador);
    let valorFecha = fecha.value;
    
    let fechaSinGuion = valorFecha.split('-');
    
    let fechaReversada = fechaSinGuion.reverse();
    
    let fechaFormateada = fechaReversada.join('/');


    switch (identificador) {
            case "fecha-nacimiento":
                    document.getElementById("00NDn00000FTTBH").value = fechaFormateada;
                    break;
            case "fecha-inicio":
                    document.getElementById("00NDn00000FTUFZ").value = fechaFormateada;
                    break;
            case "fecha-finalizacion":
                document.getElementById("00NDn00000FTUJw").value = fechaFormateada;
                break;
            case "fecha-inicio2":
                document.getElementById("00NDn00000FTUJr").value = fechaFormateada;
                break;
            case "fecha-finalizacion2":
                document.getElementById("00NDn00000FTUK6").value = fechaFormateada;
                break;
            default:
                    break;
    }


}))

function mostrarEducActual() {
    let seleccion = document.getElementById("00NDn00000FTTMv").value;
    
    if (seleccion == 'SI') {
        document.getElementById('titulo-aspira').style.display = 'block';
        document.querySelectorAll(".campo-requerido").forEach(campo => campo.required =true);

    }else if(seleccion == 'No'){
        document.getElementById('titulo-aspira').style.display = 'none';
        document.querySelectorAll(".campo-requerido").forEach(campo => campo.required =false);
        document.querySelectorAll(".campo-requerido").forEach(campo => campo.value = '');
    }else{
        document.getElementById('titulo-aspira').style.display = 'none';
        document.querySelectorAll(".campo-requerido").forEach(campo => campo.value = '');
    }
}


function mostrarExpLaboral() {
    let seleccion = document.getElementById("00NDn00000FTTja").value;
    
    if (seleccion == 'SI') {
        document.getElementById('experiencia-laboral').style.display = 'block';
    }else if(seleccion == 'No'){
        document.getElementById('experiencia-laboral').style.display = 'none';
        document.querySelectorAll(".limpia-campos").forEach(campo => campo.value = '');
    }else{
        document.getElementById('experiencia-laboral').style.display = 'none';
        document.querySelectorAll(".limpia-campos").forEach(campo => campo.value = '');
    }
}

function cargarCiudades() {
    let listaCiudades = {
        Antioquia: ["Medell??n","Abejorral","Abriaqu??","Alejandr??a","Amaga","Amalfi","Andes","Angelopolis","Angostura","Anor??","Santaf?? De Antioquia","Anza","Apartad??","Arboletes","Argelia","Armenia","Barbosa","Belmira","Bello","Betania","Betulia","Ciudad Bol??var","Brice??o","Buritic??","C??ceres","Caicedo","Caldas","Campamento","Ca??asgordas","Caracol??","Caramanta","Carepa","Carmen De Viboral","Carolina","Caucasia","Chigorod??","Cisneros","Cocorn??","Concepci??n","Concordia","Copacabana","Dabeiba","Don Matias","Eb??jico","El Bagre","Entrerrios","Envigado","Fredonia","Frontino","Giraldo","Girardota","G??mez Plata","Granada","Guadalupe","Guarne","Guatape","Heliconia","Hispania","Itagui","Ituango","Jard??n","Jeric??","La Ceja","La Estrella","La Pintada","La Uni??n","Liborina","Maceo","Marinilla","Montebello","Murind??","Mutata","Nari??o","Necocl??","Nech??","Olaya","Pe??ol","Peque","Pueblorrico","Puerto Berrio","Puerto Nare","Puerto Triunfo","Remedios","Retiro","Rionegro","Sabanalarga (ANT)","Sabaneta","Salgar","San Andr??s","San Carlos","San Francisco","San Jer??nimo","San Jos?? De La Monta??a","San Juan De Uraba","San Luis","San Pedro","San Pedro De Uraba","San Rafael","San Roque","San Vicente","Santa Barbara","Santa Rosa De Osos","Santo Domingo","Santuario","Segovia","Sonson","Sopetran","T??mesis","Taraz??","Tarso","Titirib??","Toledo","Turbo","Uramita","Urrao","Valdivia","Valparaiso","Vegach??","Venecia","Vig??a Del Fuerte","Yal??","Yarumal","Yolomb??","Yond??","Zaragoza"],
	    Atl??ntico: ["Barranquilla","Baranoa","Campo De La Cruz","Galapa","Juan De Acosta","Luruaco","Malambo","Manati","Palmar De Varela","Ponedera","Puerto Colombia","Repelon","Sabanagrande","Sabanalarga(ATL)","Santa Lucia","Santo Tomas","Soledad"],
        "Bogot?? D.C.": ["Bogot?? D.C"],
        Bol??var: ["Cartagena","Ach??","Arjona","Calamar","C??rdoba","Carmen De Bol??var","Magangu??","Mahates","Mar??a La Baja","Montecristo","Momp??s","Morales","Pinillos","San Estanislao","San Jacinto","San Juan Nepomuceno","San Pablo","Santa Rosa De Lima","Santa Rosa Del Sur","Simit??","Tiquisio","Turbaco","Turbana","Villanueva"],
	    Boyac??: ["Tunja","Almeida","Arcabuco","Berbeo","Boyac??","Brice??o (BOY)","Busbanz??","Caldas (BOY)","Cerinza","Chiquinquir??","Chiscas","Chitaraque","Ci??nega","Cubar??","Duitama","Firavitoba","Floresta","G??ic??n","Iza","Jenesano","Labranzagrande","La Victoria","Villa De Leyva","Macanal","Mongua","Moniquir??","Otanche","Paipa","Pajarito","Panqueba","Pauna","Paya","Pesca","Puerto Boyaca","Ramiriqu??","S??chica","San Luis De Gaceno","San Pablo Borbur","Santa Mar??a","Santa Sof??a","Sativanorte","Soat??","Socot??","Sogamoso","Somondoco","Sorac??","Sutatenza","Tenza","Tiban??","Tinjac??","Tog????","Tota","Tuta","Umbita","Ventaquemada"],
	    Caldas: ["Manizales","Aguadas","Anserma","Aranzazu","Belalc??zar","Chinchina","Filadelfia","La Dorada","Manzanares","Marquetalia","Neira","P??cora","Palestina","Pensilvania","Riosucio","Risaralda","Salamina","Saman??","Sup??a","Villamaria","Viterbo"],
	    Caquet??: ["Florencia","Bel??n De Los Andaquies","Cartagena Del Chair??","Currillo","El Doncello","El Paujil","La Monta??ita","Milan","Puerto Rico","San Jose Del Fragua","San Vicente Del Cagu??n","Solano","Valparaiso (CAQ)"],
	    Cauca: ["Popay??n","Argelia (CAU)","Balboa","Bol??var","Buenos Aires","Cajib??o","Caldono","Caloto","Corinto","El Tambo","Guapi","Inz??","La Vega","Lopez","Mercaderes","Miranda","Morales (CAU)","Paez","Patia","Piendamo","Puerto Tejada","Rosas","Santander De Quilichao","Silvia","Suarez","Timbio","Timbiqui","Toribio","Totoro","Villa Rica"],
	    Cesar: ["Valledupar","Aguachica","Agust??n Codazzi","Astrea","Becerril","Bosconia","Chimichagua","Chiriguana","Curuman??","El Copey","El Paso","La Gloria","La Jagua De Ibirico","Pailitas","Pelaya","Pueblo Bello","R??o De Oro","La Paz","San Alberto","San Diego","San Mart??n","Tamalameque"],
        C??rdoba: ["Monter??a","Ayapel","Buenavista","Ceret??","Chim??","Chin??","Ci??naga De Oro","Cotorra","Lorica","Los C??rdobas","Momil","Montel??bano","Mo??itos","Planeta Rica","Pueblo Nuevo","Puerto Escondido","Puerto Libertador","Sahag??n","San Andr??s Sotavento","San Antero","San Bernardo Del Viento","San Carlos (COR)","San Pelayo","Tierralta","Valencia"],
        Cundinamarca: ["Agua De Dios","Alb??n","Anapoima","Anolaima","Arbel??ez","Bituima","Bojac??","Cabrera","Cachipay","Cajic??","Caparrap??","Caqueza","Carmen De Carupa","Chaguan??","Ch??a","Chipaque","Choach??","Chocont??","Cogua","Cota","Cucunub??","El Colegio","El Pe????n","El Rosal","Facatativ??","Fomeque","Fosca","Funza","F??quene","Fusagasug??","Gachala","Gachancip??","Gacheta","Gama","Girardot","Granada (CUN)","Guachet??","Guaduas","Guasca","Guataqu??","Guatavita","Guayabal De Siquima","Guayabetal","Jun??n","La Calera","La Mesa","La Palma","La Pe??a","La Vega (CUN)","Lenguazaque","Macheta","Madrid","Manta","Medina","Mosquera","Nilo","Nimaima","Nocaima","Venecia (CUN)","Pacho","Paime","Pandi","Paratebueno","Pasca","Puerto Salgar","Puli","Quebradanegra","Quetame","Quipile","Apulo","Ricaurte","San Antonio De Tequendama","San Bernardo","San Cayetano","San Francisco (CUN)","San Juan De R??o Seco","Sasaima","Sesquil??","Sibat??","Silvania","Simijaca","Soacha","Sop??","Subachoque","Suesca","Supat??","Susa","Sutatausa","Tabio","Tausa","Tena","Tenjo","Tibacuy","Tibirita","Tocaima","Tocancip??","Topaipi","Ubal??","Ubaque","Ubate","Une","??tica","Vergara","Vian??","Villapinz??n","Villeta","Viot??","Yacop??","Zipacon","Zipaquir??"],
        Choc??: ["Quibd??","Acand??","Alto Baud??","Atrato","Bagad??","Bah??a Solano","Bajo Baud??","Bel??n De Bajira","Bojaya","Canton De San Pablo","Carm??n Del Dari??n","Certegui","Condoto","El Carmen De Atrato","El Litoral Del San Juan","Itsmina","Jurad??","Llor??","Medio Atrato","Medio Baud??","Medio San Juan","N??vita","Nuqu??","R??o Fr??o","Rio Quito","Riosucio (CHO)","San Jos?? Del Palmar","Sip??","Tad??","Ungu??a","Union Panamericana"],
        Huila: ["Neiva","Acevedo","Agrado","Aipe","Algeciras","Altamira","Baraya","Campoalegre","Colombia","El??as","Garz??n","Gigante","Guadalupe (HUI)","Hobo","Iquira","Isnos","La Argentina","La Plata","N??taga","Oporapa","Paicol","Palermo","Palestina (HUI)","Pital","Pitalito","Rivera","Saladoblanco","San Agust??n","Santa Mar??a (HUI)","Suaza","Tarqui","Tesalia","Tello","Teruel","Timan??","Villavieja","Yaguar??"],
        "La Guajira": ["Riohacha","Albania","Barrancas","Dibulla","Distraccion","El Molino","Fonseca","Hatonuevo","La Jagua Del Pilar","Maicao","Manaure","San Juan Del Cesar","Uribia","Urumita","Villanueva (GUA)"],
        Magdalena: ["Santa Marta","Algarrobo","Aracataca","Ariguan??","Cerro San Antonio","Chibolo","Ci??naga","Concordia (MAG)","El Banco","El Pi??on","El Reten","Fundacion","Guamal","Nueva Granada","Pedraza","Piji??o Del Carmen","Pivijay","Plato","Pueblo Viejo","Remolino","Sabanas De San Angel","Salamina (MAG)","San Sebastian De Buenavista","San Zenon","Santa Ana","Santa Barbara De Pinto","Sitionuevo","Tenerife","Zapayan","Zona Bananera"],
        Meta: ["Villavicencio","Acacias","Barranca De Upia","Cabuyaro","Castilla La Nueva","San Luis De Cubarral","Cumaral","El Calvario","El Castillo","El Dorado","Fuente De Oro","Granada (MET)","Guamal (MET)","Mapiripan","Mesetas","La Macarena","La Uribe","Lejan??as","Puerto Concordia","Puerto Gait??n","Puerto Lopez","Puerto Lleras","Puerto Rico (MET)","Restrepo","San Carlos Guaroa","San Juan De Arama","San Juanito","San Mart??n (MET)","Vista Hermosa"],
        Nari??o: ["Pasto","Alban","Aldana","Ancuya","Arboleda","Barbacoas","Belen","Buesaco","Colon","Consaca","Contadero","C??rdoba (NAR)","Cuaspud","Cumbal","Cumbitara","Chachagui","El Charco","El Pe??ol","El Rosario","El Tablon De Gomez","El Tambo (NAR)","Funes","Guachucal","Guaitarilla","Gualmatan","Iles","Imues","Ipiales","La Cruz","La Florida","La Llanada","La Tola","La Union","Leiva","Linares","Los Andes","Magui","Mallama","Mosquera (NAR)","Nari??o (NAR)","Olaya Herrera","Ospina","Francisco Pizarro","Policarpa","Potos??","Providencia","Puerres","Pupiales","Ricaurte (NAR)","Roberto Payan","Samaniego","Sandon??","San Bernardo (NAR)","San Lorenzo","San Pablo (NAR)","San Pedro De Cartago","Santa Barbara (NAR)","Santa Cruz","Sapuyes","Taminango","Tangua","Tumaco","Tuquerres","Yacuanquer"],
        "Norte de Santander": ["C??cuta","Abrego","Arboledas","Bochalema","Bucarasica","C??cota","Cachir??","Chin??cota","Chitag??","Convenci??n","Cucutilla","Durania","El Carmen","El Tarra","El Zulia","Gramalote","Hacar??","Herr??n","Labateca","La Esperanza","La Playa","Los Patios","Lourdes","Mutiscua","Oca??a","Pamplona","Pamplonita","Puerto Santander","Ragonvalia","Salazar","San Calixto","San Cayetano (NOR)","Santiago","Sardinata","Silos","Teorama","Tib??","Toledo (NOR)","Villa Caro","Villa Del Rosario"],
        Quind??o: ["Armenia (QUI)","Buenavista (QUI)","Calarca","Circasia","Cordoba","Filandia","Genova","La Tebaida","Montengro","Pijao","Quimbaya","Salento"],
        Risaralda: ["Pereira","Ap??a","Balboa (RIS)","Bel??n De Umbr??a","Dosquebradas","Gu??tica","La Celia","La Virginia","Marsella","Mistrat??","Pueblo Rico","Quinchia","Santa Rosa De Cabal","Santuario (RIS)"],
        Santander: ["Bucaramanga","Aguada","Albania (SAN)","Aratoca","Barbosa (SAN)","Barichara","Barrancabermeja","Betulia (SAN)","Bol??var (SAN)","Cabrera (SAN)","California","Capitanejo","Carcas??","Cepit??","Cerrito","Charal??","Charta","Chima","Chipat??","Cimitarra","Concepci??n (SAN)","Confines","Contrataci??n","Coromoro","Curit??","El Carmen De Chucur??","El Guacamayo","El Pe????n (SAN)","El Play??n","Encino","Enciso","Flori??n","Floridablanca","Gal??n","Gambita","Gir??n","Guaca","Guadalupe (SAN)","Guapot??","Guavat??","Guepsa","Hato","Jes??s Mar??a","Jord??n","La Belleza","Land??zuri","La Paz (SAN)","Lebr??ja","Los Santos","Macaravita","M??laga","Matanza","Mogotes","Molagavita","Ocamonte","Oiba","Onzaga","Palmar","Palmas Del Socorro","P??ramo","Piedecuesta","Pinchote","Puente Nacional","Puerto Parra","Puerto Wilches","Rionegro (SAN)","Sabana De Torres","San Andr??s (SAN)","San Benito","San Gil","San Joaqu??n","San Jos?? De Miranda","San Miguel","San Vicente De Chucur??","Santa B??rbara","Santa Helena Del Op??n","Simacota","Socorro","Suaita","Sucre","Surata","Tona","Valle De San Jos??","V??lez","Vetas","Villanueva (SAN)","Zapatoca"],
        Sucre: ["Sincelejo","Buenavista (SUC)","Caimito","Coloso","Corozal","Cove??as","Chal??n","El Roble","Galeras","Guaranda","La Uni??n (SUC)","Los Palmitos","Majagual","Morroa","Ovejas","Palmito","Sampu??s","San Benito Abad","San Juan Betulia","San Marcos","San Onofre","San Pedro (SUC)","Sinc??","Sucre (SUC)","Santiago De Tol??","Tol?? Viejo"],
        Tolima: ["Ibague","Alpujarra","Alvarado","Ambalema","Anzo??tegui","Armero","Ataco","Cajamarca","Carmen De Apical??","Casabianca","Chaparral","Coello","Coyaima","Cunday","Dolores","Espinal","Falan","Flandes","Fresno","Guamo","Herveo","Honda","Icononzo","Lerida","Libano","Mariquita","Melgar","Murillo","Natagaima","Ortega","Palocabildo","Piedras","Planadas","Prado","Purificaci??n","Rioblanco","Roncesvalles","Rovira","Salda??a","San Antonio","San Luis (TOL)","Santa Isabel","Su??rez","Valle De San Juan","Venadillo","Villahermosa","Villarrica"],
        "Valle del Cauca": ["Cali","Alcala","Andaluc??a","Ansermanuevo","Argelia (VALL)","Bol??var (VALL)","Buenaventura","Buga","Bugalagrande","Caicedonia","Calima","Candelaria","Cartago","Dagua","El ??guila","El Cairo","El Cerrito","El Dovio","Florida","Ginebra","Guacar??","Jamund??","La Cumbre","La Uni??n (VALL)","La Victoria (VALL)","Obando","Palmira","Pradera","Restrepo (VALL)","Riofrio","Roldanillo","San Pedro (VALL)","Sevilla","Toro","Trujillo","Tulu??","Ulloa","Versalles","Vijes","Yotoco","Yumbo","Zarzal"],
        Arauca: ["Arauca","Arauquita","Cravo Norte","Fortul","Puerto Rond??n","Saravena","Tame"],
        Casanare: ["Yopal","Aguazul","Chameza","Hato Corozal","La Salina","Man??","Monterrey","Nunch??a","Orocu??","Paz De Ariporo","Pore","Recetor","Sabanalarga","S??cama","San Luis De Palenque","T??mara","Tauramena","Trinidad","Villanueva (CAS)"],
        Putumayo: ["Mocoa","Col??n","Orito","Puerto Asis","Puerto Caicedo","Puerto Guzman","Puerto Leguizamo","Sibundoy","San Francisco (PUT)","San Miguel (PUT)","Santiago (PUT)","Valle Del Guamuez","Villa Garzon"],
        "San Andr??s y Providencia": ["San Andr??s (SAN A)","Providencia Y Santa Catalina"],
        Amazonas: ["Leticia","El Encanto","La Chorrera","La Pedrera","La Victoria (AMZ)","Miriti - Paran??","Puerto Alegria","Puerto Arica","Puerto Nari??o","Puerto Santander (AMZ)","Tarapac??"],
        Guain??a: ["In??rida","Barranco Mina","Mapiripan (GUA)","San Felipe","Puerto Colombia (GUA)","La Guadalupe","Cacahual","Pana Pana","Morichal"],
        Guaviare: ["San Jos?? Del Guaviare","Calamar (GUAV)","El Retorno","Miraflores"],
        Vaup??s: ["Mit??","Caruru","Pacoa","Taraira","Papunahua","Yavarat??"],
        Vichada: ["Puerto Carre??o","La Primavera","Santa Rosal??a","Cumaribo"]

	
    }


    let departamentos = document.getElementById('00NDn00000FTrRm');
    let ciudades = document.getElementById('00NDn00000FUJYt');
    let departamentoSeleccionado = departamentos.value;

    ciudades.innerHTML = '<option value="">--Ninguno--</option>';

    if(departamentoSeleccionado !== ''){
        departamentoSeleccionado = listaCiudades[departamentoSeleccionado];
        departamentoSeleccionado.sort();

        departamentoSeleccionado.forEach(function (ciudad) {
           let opcion = document.createElement('option');
           opcion.value = ciudad;
           opcion.text = ciudad;
           ciudades.add(opcion); 
        });
    }
}

/*
function archivoTexto() {
    let archivoObtenido = document.getElementById("archivo").value;
    document.getElementById("00NDn00000J9QXX").value = archivoObtenido;
}

function postLeadToSFDC() {

    const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
    };
  
    const oid = document.getElementById('oid').value;
    const retUrl = document.getElementById('retURL').value;
    const activo = document.getElementById('00NDn00000FTSmW').value;
    const origen = document.getElementById('lead_source').value;
    const compania = document.getElementById('company').value;
    const nombre = document.getElementById('first_name').value;
    const apellido = document.getElementById('last_name').value;
    const tipoIdetificacion = document.getElementById('00NDn00000FTR2t').value;
    const numeroIdentificacion = document.getElementById('00NDn00000FTR2y').value;
    const fechaNacimiento = document.getElementById('00NDn00000FTTBH').value;
    const aspiracionSalarial = document.getElementById('00NDn00000J9CQa').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const departamentoResidencia = document.getElementById('00NDn00000FTrRm').value;
    const ciudadResidencia = document.getElementById('00NDn00000FUJYt').value;
    const nivelEscolaridad = document.getElementById('00NDn00000FTSEH').value;
    const tituloAdquirido = document.getElementById('00NDn00000FTSEb').value;
    const instEducativa = document.getElementById('00NDn00000FTSHV').value;
    const estaEstudiando = document.getElementById('00NDn00000FTTMv').value;
    console.log(estaEstudiando);
    const tituloAspira = document.getElementById('00NDn00000FTTR8').value;
    const instEducActual = document.getElementById('00NDn00000FTd1C').value;
    const nivelActual = document.getElementById('00NDn00000FTTRD').value;
    const nivelIngles = document.getElementById('00NDn00000FTTZx').value;
    const tipoVinculacion = document.getElementById('00NDn00000J9CY6').value;
    const modalidadTrabajo = document.getElementById('00NDn00000J9CcY').value;
    const experienciaLaboral = document.getElementById('00NDn00000FTTja').value;
    const nombreEmpresa = document.getElementById('00NDn00000FTTsi').value;
    const cargo = document.getElementById('title').value;
    const jefeInmediato = document.getElementById('00NDn00000FTTtg').value;
    const fechaInicio = document.getElementById('00NDn00000FTUFZ').value;
    const fechaFinalizacion = document.getElementById('00NDn00000FTUJw').value;
    const otraEmpresa = document.getElementById('00NDn00000FTTsx').value;
    const otroCargo = document.getElementById('00NDn00000FTTtb').value;
    const otroJefe = document.getElementById('00NDn00000FTU75').value;
    const otraFechaInicio = document.getElementById('00NDn00000FTUJr').value;
    const otraFechaFin = document.getElementById('00NDn00000FTUK6').value;
    const archivo = document.getElementById('archivo').value;
    
    fetch(
      `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&oid=${oid}&retURL=${retUrl}&00NDn00000FTSmW=${activo}&lead_source=${origen}&company=${compania}&first_name=${nombre}&last_name=${apellido}&00NDn00000FTR2t=${tipoIdetificacion}&00NDn00000FTR2y=${numeroIdentificacion}&00NDn00000FTTBH=${fechaNacimiento}&00NDn00000J9CQa=${aspiracionSalarial}&email=${email}&phone=${phone}&00NDn00000FTrRm=${departamentoResidencia}&00NDn00000FUJYt=${ciudadResidencia}&00NDn00000FTSEH=${nivelEscolaridad}&00NDn00000FTSEb=${tituloAdquirido}&00NDn00000FTSHV=${instEducativa}&00NDn00000FTTMv=${estaEstudiando}&00NDn00000FTTR8=${tituloAspira}&00NDn00000FTd1C=${instEducActual}&00NDn00000FTTRD=${nivelActual}&00NDn00000FTTZx=${nivelIngles}&00NDn00000J9CY6=${tipoVinculacion}&00NDn00000J9CcY=${modalidadTrabajo}&00NDn00000FTTja=${experienciaLaboral}&00NDn00000FTTsi=${nombreEmpresa}&title=${cargo}&00NDn00000FTTtg=${jefeInmediato}&00NDn00000FTUFZ=${fechaInicio}&00NDn00000FTUJw=${fechaFinalizacion}&00NDn00000FTTsx=${otraEmpresa}&00NDn00000FTTtb=${otroCargo}&00NDn00000FTU75=${otroJefe}&00NDn00000FTUJr=${otraFechaInicio}&00NDn00000FTUK6=${otraFechaFin}&00NDn00000J9QXX=${archivo}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
  
 */


//uekwfrdqugiihwzd

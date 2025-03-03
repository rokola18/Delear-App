import '../css/solicitudPrestamo.css'

const SolicitudPrestamo = ({texts}) => {
    return(
        <div>
            <div className='solicitud'>
               <div className='este'>
                 <h3>FINAUTO, LA MAYOR DEL ESTE</h3>
                 <span className="prestamo">SOLICITUD DE PRESTAMO</span>
               </div>
               <p className='fecha dos'>FECHA {texts.fechadespacho}</p>
               <div className='datos'>
                 <p>DATOS PERSONALES</p>
               </div>
               <div className='info-2'>
                <p>CEDULA: {texts.cedula}</p>
                <p>NOMBRE: {texts.vendedor}</p>
                <p>DIRECCION: {texts.sector}</p>
                <p>TELEFONO: {texts.telefonovende}</p>
                <p>OCUPACION: {texts.ocupacion}</p>
                <p>TRABAJO:</p>
                <p>CARGO:</p>
                <p>ESTADO CIVIL: {texts.civil}</p>
                <p>SALARIO: {texts.salario}</p>
               </div>
               <div className='familiar'>
                 <p>DATOS DE UN FAMILIAR</p>
               </div>
               <div className='fami-2'>
                 <p>CEDULA: {texts.garantecedula}</p>
                 <p>PARENTEZCO: {texts.parentezco}</p>
                 <p>NOMBRE: {texts.garante}</p>
                 <p>TRABAJO: {texts.trabajo}</p>
                 <p>DIRECCION: {texts.sectorgarante}</p>
                 <p>TELEFONO: {texts.telefonogara}</p>
                 <p>CARGO:</p>
               </div>
               <div className='financiar'>
                <p>DATOS DEL FINANCIAMIENTO</p>
               </div>
               <div className='fina'>
                 <p>CANTIDADA: {texts.precioinicialnumero}</p>
                 <p>TIEMPO: {texts.cantidadmeses}</p>
               </div>
               <div className='datosvehi'>
                <p>DATOS DE LA MOTOCICLETA O VEHICULO</p>
               </div>
               <div className='info-vehi'>
                <p>TIPO: {texts.tipo}</p>
                <p>MARCA: {texts.marca}</p>
                <p>MODELO: {texts.modelo}</p>
                <p>CHASIS NO.: {texts.chasis}</p>
                <p>NO. MAQUINA:</p>
                <p>AÑO: {texts.año}</p>
                <p>COLOR: {texts.color}</p>
               </div>
               <div className='aprobar prove'>

               <div>
                    _______________________________
                     <span>PREPARADO POR:</span>
                     
                </div>

                <div className='por'>
                    _______________________________
                     <span>APROBADO POR:</span>

                </div>

                <div>
                    _______________________________
                     <span>FIRMA SOLICITANTE:</span>
                     
                </div>

               </div>
            </div>
        </div>
    )
}

export default SolicitudPrestamo
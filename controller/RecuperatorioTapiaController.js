function validarCuotaAlDia(elemento){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!elemento.debeCuota){
                resolve(`El usuario: ${elemento.nombre} puede ingresar al establecimiento!`)
            }else {
                reject(`Error! ${elemento.debeCuota} tiene ... cuotas pendientes .`)
            }
        }, 8000) 
    })
}
const habilitarIngreso = (respuesta) => {
    setTimeout(() => {
        respuesta.status(200).json({
            mensaje: "Ingreso habilitando"
        });
    }, 6000);
};





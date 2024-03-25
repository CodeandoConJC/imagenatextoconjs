//Usando la librería OCR TesseRact Js

//Disparar Evento para el div explorar al dar clic
document.getElementById('explorar').addEventListener("click", ()=>{
  document.getElementById('inputFile').click() //Abrir explorador de archivos del navegador inputFile
})

//Al seleccionar un archivo, el evento se dispara.
document.getElementById('inputFile').addEventListener("change", async()=>{
  const imagen = document.getElementById('inputFile').files[0]
  const { createWorker } = Tesseract;

  const worker = await createWorker({
    logger: datos =>{
      console.log(datos) //Muestra el avance en consola log
      let avance =  Math.floor(datos.progress.toFixed(2) * 100) + "%" //Obtener el porcentaje de avance para la barra de progreso
      document.getElementById('myBar').style.width = avance //Modificar el progreso de la barra
      document.getElementById('myBar').innerHTML = avance // Mostrar el progreso de la tarea en la barra
    },
    errorHandler: error=>{ //Capturar algun error ocurrido
      console.log(error)
    }
  });

  obtenerVP() //Llamar a vista previa de la imagen cargada
  .then(resolve=>{
    document.getElementById('vpImagen').src = resolve;
  })
  .catch(error=>{
    console.log(error);
  });

  (async () => {
    await worker.loadLanguage('eng+spa');//Soporte para varios lenguajes
    await worker.initialize('eng+spa');
    const { data: { text } } = await worker.recognize(imagen)
    console.log(text); //Mostrar texto obtenido en consola.
    //Mostrar texto en el div y remplazar saltos de línea (n - r) con un <br> (salto en html)
    document.getElementById('textoImg').innerHTML = text.replace(/[\n\r]/g, "<br>")
    await worker.terminate();
  })();

})

document.getElementById('btnCopiar').addEventListener("click", ()=>{
  let textoImg = document.getElementById('textoImg').innerText
  //Hacer uso de API clipboard para acceder al portapapeles del sist
  if (!navigator.clipboard) { //Verificar si se permite acceso
    alert("Al parecer el navegador no acepta la función de API para accesar al portapapeles.");
    return
  }

  try { //Se puede accesar al portapapeles, entonces
    navigator.clipboard.writeText(textoImg) //Colocar el texto
    alert("Texto copiado al portapapeles.")
  } catch (e) { //No se pudó copiar al portapapeles
    alert("Error al intentar copiar al portapapeles.")
  }
})

function obtenerVP() {
  return new Promise((resolve, reject)=>{
    let img_leida = new FileReader()
    //Asignar el inputFile en la posición 1
    img_leida.readAsDataURL(document.getElementById('inputFile').files[0]);

    img_leida.onload = ()=>{
      resolve(img_leida.result)//Devolver, vista previa
    }

    img_leida.onerror = (error)=>{
      reject(error) //Rechazar, devolver error
    }
  })
}

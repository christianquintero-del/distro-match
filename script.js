function evaluarSistema() {
    // Captura de datos
    let ram = parseFloat(document.getElementById('ramInput').value);
    let cores = parseInt(document.getElementById('coresInput').value);
    let vram = parseFloat(document.getElementById('vramInput').value);
    let prefiereModerno = document.getElementById('layoutWin').checked;
    let divResultado = document.getElementById('resultadoPrueba');

    // Validación de entrada (Condicional para datos correctos)
    if (isNaN(ram) || isNaN(cores) || isNaN(vram) || ram <= 0 || cores <= 0) {
        divResultado.innerHTML = "<p style='color: red;'><strong>Error:</strong> Por favor completa todos los campos con valores numéricos válidos.</p>";
        return;
    }

    // OPERADORES ARITMÉTICOS: Estimación de consumo de recursos
    let ramRestanteCore = ram - 2.5;
    
    let ramRestanteLite = ram - 1.2;

    let recomendacion = "";

    // CONDICIONALES CON OPERADORES LÓGICOS (&&, ||, !)
    // Evaluación para equipos de entrada / recursos ajustados
    if (ram < 4 || cores < 4 || vram < 1) {
        if (!prefiereModerno) { // Operador Lógico NOT (!)
            recomendacion = "Tu equipo es de recursos moderados. Te recomendamos <strong>Linux Mint (Edición XFCE)</strong>. Tendrás un sistema extremadamente veloz con cerca de " + ramRestanteLite.toFixed(1) + " GB de RAM libres.";
        } else {
            recomendacion = "Para tu hardware de entrada, te recomendamos <strong>Zorin OS 18 Lite</strong>. Obtendrás un entorno ligero con escritorio XFCE pero adaptado a la estética moderna de Zorin.";
        }
    } 
    // Evaluación para equipos de gama media / alta
    else if (ram >= 4 && cores >= 4 && vram >= 1) { // Operador Lógico AND (&&)
        if (prefiereModerno) {
            recomendacion = "¡Tu equipo es idóneo! Te recomendamos <strong>Zorin OS 18 Core</strong>. Podrás usar los entornos avanzados (estilo Windows 11 o macOS) sin problemas. RAM estimadamente libre: " + ramRestanteCore.toFixed(1) + " GB.";
        } else {
            recomendacion = "Te recomendamos <strong>Linux Mint Cinnamon</strong>. Aprovecharás tus " + cores + " núcleos para un rendimiento impecable con el escritorio Cinnamon tradicional.";
        }
    } else {
        recomendacion = "Cualquiera de las versiones ligeras (Linux Mint XFCE o Zorin OS 18 Lite) funcionará perfectamente en tu PC.";
    }

    // SALIDA EN EL DOM
    divResultado.innerHTML = "<p style='color: green; font-size: 1.1em; padding: 12px; border: 1px solid green; background-color: #f0fff0; border-radius: 5px;'>" + recomendacion + "</p>";

}
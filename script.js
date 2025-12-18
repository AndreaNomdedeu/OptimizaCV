document.getElementById("analizar").addEventListener("click", async function() {
    const cv = document.getElementById("cv").value;
    const oferta = document.getElementById("oferta").value;
    const resultadoDiv = document.getElementById("resultado");

    if (!cv || !oferta) {
        resultadoDiv.innerHTML = "Por favor, completa ambos campos.";
        return;
    }

    resultadoDiv.innerHTML = "Analizando tu CV... ⏳";

    try {
        const response = await fetch("https://optimizacv-worker.andreanomdedeudiazvalero.workers.dev", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ cv, oferta })
        });

        const data = await response.json();
        resultadoDiv.innerHTML = `<strong>Resultado:</strong><br>${data.result}`;
    } catch (error) {
        console.error(error);
        resultadoDiv.innerHTML = "Ocurrió un error. Intenta nuevamente.";
    }
});

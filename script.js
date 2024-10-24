function calculateResults() {
    const form = document.getElementById('mentalHealthForm');
    const formData = new FormData(form);
    let totalScore = 0;
    let questionsCount = 0;

    for (const value of formData.values()) {
        totalScore += parseInt(value);
        questionsCount++;
    }

    const percentage = (totalScore / (questionsCount * 2)) * 100;

    let resultMessage = '';
    if (percentage < 30) {
        resultMessage = 'Baixo risco de desenvolver doenças mentais.';
    } else if (percentage < 70) {
        resultMessage = 'Risco moderado, considere buscar apoio.';
    } else {
        resultMessage = 'Alto risco, é recomendável procurar um profissional.';
    }

    document.getElementById('result').innerText = `Resultado: ${percentage.toFixed(2)}% - ${resultMessage}`;
}

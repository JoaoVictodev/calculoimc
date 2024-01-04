function pessoas() {
  const resultado = document.querySelector('.form');
  const pessoa = [];
  Object.length

  function caulculoInfo(evento) {
    evento.preventDefault();


    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');

    pessoa.push({
      peso: peso.value,
      altura: altura.value
    })

    const imc = Number(peso.value / (altura.value * altura.value))

    if (imc < 18.5) {
      resultado.innerHTML += `<p>Seu imc  é ${imc.toFixed(2)}, Você esta abaixo do peso.</P>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.innerHTML += `<p>Seu imc  é ${imc.toFixed(2)}, Você esta com o peso normal.</P>`;
    } else if (imc >= 25 && imc <= 29.9) {
      resultado.innerHTML += `<p>Seu imc  é ${imc.toFixed(2)}, Você esta com sobrepeso.</P>`;
    } else if (imc >= 30 && imc <= 34.9) {
      resultado.innerHTML += `<p>Seu imc  é ${imc.toFixed(2)}, Você esta com obesidade de grau 1.</P> <h3>ALERTA!!</h3> <P>
      É crucial que você, enfrentando a obesidade, busque orientação profissional para garantir seu bem-estar. A obesidade é um fator de risco para várias condições de saúde, como diabetes e doenças cardiovasculares. Consulte um médico ou nutricionista para um plano de gestão de peso personalizado. Para mais informações sobre os riscos associados à obesidade e opções de tratamento, clique [aqui](insira o link relevante).</P>`;
    } else if (imc >= 35 && imc <= 39.9) {
      resultado.innerHTML += `<p>Seu imc  é ${imc.toFixed(2)}, Você esta com obesidade de grau 2. <h3>ALERTA!!</h3> <P>
      É crucial que você, enfrentando a obesidade, busque orientação profissional para garantir seu bem-estar. A obesidade é um fator de risco para várias condições de saúde, como diabetes e doenças cardiovasculares. Consulte um médico ou nutricionista para um plano de gestão de peso personalizado. Para mais informações sobre os riscos associados à obesidade e opções de tratamento, clique [aqui](insira o link relevante).</P>`;
    } else if (imc >= 40) {
      resultado.innerHTML += `<p>Seu imc  é ${imc.toFixed(2)}, Você esta com obesidade de grau 3.</P> 
      <h3>ALERTA!!</h3><p>É crucial que você, enfrentando a obesidade, busque orientação profissional para garantir seu bem-estar. A obesidade é um fator de risco para várias condições de saúde, como diabetes e doenças cardiovasculares. Consulte um médico ou nutricionista para um plano de gestão de peso personalizado. Para mais informações sobre os riscos associados à obesidade e opções de tratamento, clique <a href="https://www.cdc.gov/obesity/index.html" target="_blank">aqui</a> ou <a href="https://www.who.int/health-topics/obesity#tab=tab_1" target="_blank">aqui</a>.</p>`;
    } else if (peso || NaN && altura || NaN){
      resultado.innerHTML += `<p class="p-invalido">Altura ou Peso ivalido</p>`
    }
    

    console.log(imc);

  }


  form: addEventListener("submit", caulculoInfo);
}

pessoas();

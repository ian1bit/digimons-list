const getDigimonUrl = 'https://digimon-api.vercel.app/api/digimon'

const fetchDigimon = async () => {
  const digiInfo = await fetch(getDigimonUrl).then(r => r.json())

  insertDigimonToPage = () => {
    const digimonContainer = document.querySelector('#digimons')

    digimonContainer.innerHTML = digiInfo.reduce((accumulator, { name, img, level }) => {
      accumulator += `
        <li>
          <img src="${img}" />
          <div id="digimon-info-container">
            <h2 class="digimon-title">${name}</h2>
            <p class="type ${level.replace(' ', '')}">${level}</p>      
          </div>
        </li>
      `
      return accumulator
    }, '')
  }

  insertDigimonToPage()
}

fetchDigimon()

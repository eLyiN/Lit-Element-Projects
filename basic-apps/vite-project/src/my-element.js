import { LitElement, css, html } from 'lit'
import './components/GetData.js'
import MyElementStyle from './styles/MyElementStyle.js'
import './components/ApiTemplate.js'

class MyElement extends LitElement {

  static get properties() {
    return {
      wiki: { type: Array }
    };
  }
  constructor() {
    super()

    this.wiki = []
    this.addEventListener('ApiData', (e) => {
      this._dataFormat(e.detail.data)
    })

  }

  static get styles() {
    return MyElementStyle
  }


  _dataFormat(data) {
    let characters = []
    data.results.forEach(character => {
      characters.push({
        name: character.name,
        image: character.image,
        status: character.status,
        species: character.species,
      })
    })
    this.wiki = characters
  }


  render() {
    return html`
      <api-template></api-template>
      <get-data url="https://rickandmortyapi.com/api/character" method="GET"></get-data>
      ${this.dataTemplate}

    `
  }


  get dataTemplate() {
    return html`
  ${this.wiki.map(character => html`
    <div class="card">
      <div class="card-content">
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>${character.status} | ${character.species}</p>
    </div>
    </div>
  `)}
  `
  }
}

customElements.define('my-element', MyElement)
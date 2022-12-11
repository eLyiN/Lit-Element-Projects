import { LitElement, html, css } from 'lit';

export class GetData extends LitElement {

    static get properties() {
        return {
            url: { type: String },
            method: { type: String }
        }
    }

    constructor() {
        super();
    }

    firstUpdated() {
        this._getData()
    }

    _sendData(data) {
        this.dispatchEvent(new CustomEvent('ApiData', {
            detail: { data }, bubbles: true, composed: true
        }));
    }

    _getData() {
        console.log('this.url', this.url)
        fetch(this.url, {
            method: this.method
        })
            .then(response => response.json())
            .then(data => {
                this._sendData(data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

customElements.define('get-data', GetData);

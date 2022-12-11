import { LitElement, html, css } from 'lit';

export class ApiTemplate extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .title {
                color: #24AA91;
            }
            .container {
                width: 100%;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
            h1 {
                font-size: 2.5rem;
                font-weight: 300;
                margin: 0;
            }
            p {
                font-size: 1.2rem;
                font-weight: 300;
                margin: 10px;

            }          
        `
    ];

    render() {
        return html`
            <div class="container">
                <h1>The <strong class="title">Ricky and Morty</strong> API</h1>
                <p>Here you can find all the characters from the TV show <strong>Ricky and Morty</strong></p>
            </div>
            `;
    }
}
customElements.define('api-template', ApiTemplate);

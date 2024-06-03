import {LitElement, html, css} from 'lit';

export class ButtonMorePage extends LitElement {
  static properties = {
    texto: {type: String},
  };

  static styles = [
    css`
        .container{
            width: 100%;
            display: flex;
            flex-flow: row wrap;
            justify-items: end;
        }
        .btn-more{
            margin: 1rem;
            padding: .4rem;
            background-color: #576597;
            color: #000000;
            border: 2px solid #000B34;
            border-radius: 5px;
            cursor: pointer;
            transition: all 1m;
        }
        .btn-more:hover{
          background-color: #ffffff;
          color: #000000;
          border: 3px solid #000000;
        }
    `
];


  constructor() {
    super();
    this.texto = 'Leer más';
  }

  render() {
    return html`
        <div class="container">
            <button class="btn-more">${this.texto}</button>
        </div>

    `;
  }
}
customElements.define('button-more-page', ButtonMorePage);
import {LitElement, html, css} from 'lit';

export class ButtonMorePage extends LitElement {
  static properties = {
    texto: {type: String},
  };

  static styles = [
    css`
        .container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .btn-more {
          margin: 1rem;
          padding: 10px;
          background: linear-gradient(135deg, #162236 0%, #4f84e0 100%);
          color: #ffffff;
          border: none;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.4s ease, transform 0.4s ease;
      }
        .btn-more:hover {
          background: linear-gradient(135deg, rgb(37 54 77) 0%, rgb(134 170 217) 100%);
          transform: scale(1.05);
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
import { html, css, LitElement } from 'lit';

export class CircleButtonAd extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--circle-button-ad-text-color, #000);
      }
      button {
        min-width: 60px;
        max-width: 100%;
        min-height: 60px;
        max-height: auto;
        text-decoration: none;
        display: inline-block;
        box-shadow: 0px 0px 4px #202224;
        border: 10px solid transparent;
        color: whitesmoke;
        background-color: #202224;
        font: helvetica;
        font-size: 60px;
        font-weight: bold;
        border-radius: 50%;
        position: relative;
        text-align: center;
        vertical-align: middle;
        padding: 15px;
      }
      button:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        padding-top: 100%;
      }
      button:hover {
        color: #202224;
        background-color: whitesmoke;
        border: 10px solid #202224;
      }
    `;
  }

  static get properties() {
    return {
      buttonText: { type: String },
      buttonLink: { type: String },
    };
  }

  constructor() {
    super();
    this.buttonText = 'Google';
    this.buttonLink = 'https://google.com';
  }

  render() {
    return html`
      <a href=${this.buttonLink} rel="noreferrer" target="_blank" role="button"
        ><button>${this.buttonText}</button></a
      >
    `;
  }
}

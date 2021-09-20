import { html, css, LitElement } from 'lit';
// import { remoteLinkBehavior } from "@lrnwebcomponents/utils/remoteLinkBehavior.js";
// import { activeStateBehavior } from "@lrnwebcomponents/utils/activeStateBehavior.js";
// import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class CircleButtonAd extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--circle-button-ad-text-color, #000);
      button {
      
      }
      button:active {

      }
      button:hover {
        
      }
      button:focus {

      }
      button:disabled {

      }
      
      }
    `;
  }

  

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Ashad';
    this.counter = 5;
    this.accentColor = "";
    if (this.querySelector("a")) {
      this.link = this.querySelector("a").getAttribute("href");
      this.title = this.querySelector("a").innerText;
      this.innerHTML = null;
    }
  }

  _clickCard(e) {
    if (this.editMode) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}


// add button, button hover, button focus, button disabled, buton active, 
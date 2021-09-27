import { html, css, LitElement } from 'lit';
// import { remoteLinkBehavior } from "@lrnwebcomponents/utils/remoteLinkBehavior.js";
// import { activeStateBehavior } from "@lrnwebcomponents/utils/activeStateBehavior.js";
// import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class CircleButtonAd extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        --circle-button-ad-color: #202224;
        --circle-button-ad-text-color: whitesmoke;
        --circle-button-ad-dark-mode-bg-color: #3b3c3e;
      }

      :host([dark]) {
        background-color: black;
      }

      :host([dark]) button {
        box-shadow: 0px 0px 6px var(--circle-button-ad-text-color);
      }

      :host([dark]) button:hover,
      :focus {
        box-shadow: 0px 0px 6px var(--circle-button-ad-text-color);
        background-color: var(--circle-button-ad-dark-mode-bg-color);
        color: var(--circle-button-ad-text-color);
      }

      /* TODO: This is up after disabled */
      button:active {
      }
      /* TODO: Set this up to reduce opacity and prevent click events */
      button:disabled {
        cursor: not-allowed;
        pointer-events: none;
      }

      button {
        min-width: 120px;
        max-width: 100%;
        min-height: 120px;
        max-height: auto;
        text-decoration: none;
        display: inline-block;
        box-shadow: 0px 0px 4px var(--circle-button-ad-color);
        border: 10px solid transparent;
        color: var(--circle-button-ad-text-color);
        background-color: var(--circle-button-ad-color);
        font: helvetica;
        font-size: 2rem;
        font-weight: bold;
        overflow-wrap: break-word;
        border-radius: 50%;
        position: relative;
        text-align: center;
        vertical-align: middle;
        padding: 15px;
        transition: 0.5s;
      }
      button:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        padding-top: 100%;
      }
      button:hover,
      :focus {
        color: var(--circle-button-ad-color);
        background-color: var(--circle-button-ad-text-color);
        border: 10px solid var(--circle-button-ad-color);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String, attribute: 'text' },
      link: { type: String, attribute: 'link' },
      icon: { type: String, attribute: 'icon' },
      disabled: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = 'Google';
    this.link = 'https://google.com';
    this.icon = null;
    this.disabled = false;

    // TODO: From simple-cta, want to see if this works
    // if (this.querySelector('a')) {
    //   this.link = this.querySelector('a').getAttribute('href');
    //   this.text = this.querySelector('a').innerText;
    //   this.innerHTML = null;
    // }
  }

  // TODO: From simple-cta, want to see if this works
  // _clickCard(e) {
  //   if (this.editMode) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     e.stopImmediatePropagation();
  //   }
  // }

  render() {
    return html`
      <a
        href=${this.link}
        rel="noopener noreferrer"
        target="_blank"
        role="button"
        tabindex="-1"
      >
        <button ?disabled=${this.disabled}>
          <slot>${this.text}</slot>
          ${this.icon
            ? html`<simple-icon-lite icon=${this.icon}></simple-icon-lite>`
            : ``}
        </button>
      </a>
    `;
  }
}

// add button focus, button disabled, button active,

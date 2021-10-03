/* eslint-disable no-console */
import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
// import { remoteLinkBehavior } from "@lrnwebcomponents/utils/remoteLinkBehavior.js";
// import { activeStateBehavior } from "@lrnwebcomponents/utils/activeStateBehavior.js";
// import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";

export class CircleButtonAd extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        --circle-button-ad-color: #202224;
        --circle-button-ad-text-color: whitesmoke;
        --circle-button-ad-dark-mode-bg-color: #3b3c3e;
        --circle-button-ad-active-shadow: #99ffff;
        --circle-button-ad-link-color: transparent !important;
      }

      :host([dark]) {
        background-color: black;
      }

      :host([dark]) button {
        box-shadow: 0px 0px 6px var(--circle-button-ad-text-color);
      }

      :host([dark]) button:hover,
      :host([dark]) button:focus {
        box-shadow: 0px 0px 6px var(--circle-button-ad-text-color);
        background-color: var(--circle-button-ad-dark-mode-bg-color);
        color: var(--circle-button-ad-text-color);
      }

      button:enabled:active,
      :host([dark]) button:active {
        box-shadow: 0px 0px 10px var(--circle-button-ad-active-shadow);
        transition: 0.2s;
        color: var(--circle-button-ad-text-color);
        background-color: var(--circle-button-ad-color);
      }

      button:disabled,
      :host([dark]) button:disabled {
        pointer-events: none;
        opacity: 0.5;
        box-shadow: none;
      }

      a:disabled {
        pointer-events: none;
        background-color: transparent !important;
        border-color: transparent !important;
        text-decoration: none;
      }

      button {
        min-width: 120px;
        max-width: 100%;
        min-height: 120px;
        max-height: auto;

        box-shadow: 0px 0px 4px var(--circle-button-ad-color);
        border: 10px solid transparent;
        color: var(--circle-button-ad-text-color);
        background-color: var(--circle-button-ad-color);

        font: helvetica;
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;

        display: inline-block;
        overflow-wrap: break-word;
        text-align: center;
        vertical-align: middle;
        border-radius: 50%;
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
      button:focus {
        color: var(--circle-button-ad-color);
        background-color: var(--circle-button-ad-text-color);
        border: 10px solid var(--circle-button-ad-color);
      }

      a {
        background-color: var(--circle-button-ad-link-color);
        border-color: var(--circle-button-ad-link-color);
        text-decoration: none;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String, attribute: 'title', reflect: true },
      link: { type: String, attribute: 'link' },
      icon: { type: String, attribute: 'icon' },
      disabled: { type: Boolean, reflect: true },
      dark: { type: Boolean, reflect: true },
      audio: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = 'Google';
    this.link = 'https://google.com';
    this.icon = 'touch-app';
    this.disabled = false;
    this.addEventListener('keydown', this._keyPress);
    this.dark = false;
    this.audio = true;
  }

  _clickLink(e) {
    e.preventDefault();
    if (this.disabled) {
      e.stopPropagation();
      e.stopImmediatePropagation();
      document.querySelector('a').disabled = 'true';
    } else {
      if (this.audio) {
        console.log('in use Sound');
        const sound = new Audio(
          new URL(`../lib/woo.mp3`, import.meta.url).href
        );
        sound.play();
        sound.onended = () => {
          window.open(this.link, '_blank', 'noopener noreferrer');
        };
      } else {
        window.open(this.link, '_blank', 'noopener noreferrer');
      }
      this.blur();
    }
  }

  _keyPress(e) {
    if (e.key === 'Escape') {
      this.blur();
    }
  }

  render() {
    return html`
      <a
        href=${this.link}
        rel="noopener noreferrer"
        target="_blank"
        role="button"
        tabindex="-1"
        part="circle-button-ad-link"
        @click=${this._clickLink}
      >
        <button ?disabled=${this.disabled}>
          ${this.title}
          <slot></slot>
          ${this.icon
            ? html`<simple-icon-lite icon=${this.icon}></simple-icon-lite>`
            : ``}
        </button>
      </a>
    `;
  }
}

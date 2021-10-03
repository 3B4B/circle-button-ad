import { html } from 'lit';
import '../circle-button-ad.js';

export default {
  title: 'CircleButtonAd',
  component: 'circle-button-ad',
  argTypes: {
    title: { control: 'text' },
    link: { control: 'text' },
    disabled: { control: 'boolean' },
    icon: { control: 'text' },
    dark: { control: 'boolean' },
    audio: { control: 'boolean' },
  },
};

function Template({
  title = 'Google',
  link = 'https://google.com',
  disabled = false,
  dark = false,
  icon = 'touch-app',
  slot = '',
  audio = true,
}) {
  return html`
    <circle-button-ad
      .title=${title}
      .link=${link}
      .disabled=${disabled}
      .dark=${dark}
      .icon=${icon}
      .audio=${audio}
    >
      ${slot}
    </circle-button-ad>
  `;
}

export const Regular = Template.bind({});

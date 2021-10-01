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
  },
};

function Template({
  title = 'Google',
  link = 'https://google.com',
  disabled = false,
  dark = true,
  icon = 'touch-app',
  slot = '',
}) {
  return html`
    <circle-button-ad
      .title=${title}
      .link=${link}
      .disabled=${disabled}
      .dark=${dark}
      .icon=${icon}
    >
      ${slot}
    </circle-button-ad>
  `;
}

export const Regular = Template.bind({});

// export const CustomTitle = Template.bind({});
// CustomTitle.args = {
//   title: 'My title',
// };

// export const CustomCounter = Template.bind({});
// CustomCounter.args = {
//   counter: 123456,
// };

// export const SlottedContent = Template.bind({});
// SlottedContent.args = {
//   slot: html`<p>Slotted content</p>`,
// };
// SlottedContent.argTypes = {
//   slot: { table: { disable: true } },
// };

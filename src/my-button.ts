import * as stylex from '@stylexjs/stylex';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalStyles } from './globalStyles.ts';
import { getClass } from './stylex-helper.ts';

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}

const styles = stylex.create({
  button: {
    borderRadius: '8px',
    border: '1px solid transparent',
    padding: '0.6em 1.2em',
    fontWeight: 500,
    fontFamily: 'inherit',
    cursor: 'pointer',
    transition: 'border-color 0.25s',
    borderColor: {
      ':hover': '#646cff',
    },
    outline: {
      ':focus': '4px auto -webkit-focus-ring-color',
      ':focus-visible': '4px auto -webkit-focus-ring-color',
    },
    backgroundColor: '#1a1a1a',
    fontSize: '1em',
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  big: {
    fontSize: '2em',
  },
  veryBig: {
    fontSize: '3em',
  },
});

/**
 * My button component
 */
@customElement('my-button')
export class MyButton extends LitElement {
  static styles = globalStyles();

  @property({ type: Boolean })
  red = false;

  @property({ type: Boolean })
  blue = false;

  @property({ type: Boolean })
  big = false;

  @property({ type: Boolean })
  veryBig = false;

  render() {
    const { red, blue, big, veryBig } = this;

    return html`
      <button
        class=${getClass(
          styles.button,
          red && styles.red,
          blue && styles.blue,
          big && styles.big,
          veryBig && styles.veryBig
        )}
      >
        <slot></slot>
      </button>
    `;
  }
}

import * as stylex from '@stylexjs/stylex';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalStyles } from './globalStyles';
import { getClass } from './stylex-helper';

import litLogo from './assets/lit.svg';
import viteLogo from '/vite.svg';

import './index.css';
import { classMap } from 'lit/directives/class-map.js';

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}

const styles = stylex.create({
  logo: {
    height: '6em',
    padding: '2em',
    willChange: 'filter',
    transition: 'filter 300ms',
    filter: {
      ':hover': 'drop-shadow(0 0 2em #646cffaa)',
    },
  },
  logoLit: {
    filter: {
      ':hover': 'drop-shadow(0 0 2em #325cffaa)',
    },
  },
  card: {
    padding: '2em',
  },
  link: {
    textDecoration: 'inherit',
  },
  readTheDocs: {
    color: '#888',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
  },
});

const testRed = {
  css: css`
    .test-red {
      color: red;
    }
  `,
  class: 'test-red',
};

const testBlue = {
  css: css`
    .test-blue {
      color: blue;
    }
  `,
  class: 'test-blue',
};

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [
    globalStyles(),
    css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }
    `,
    testRed.css,
    testBlue.css,
  ];

  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more - xDDDD';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <div>
        <a
          class=${getClass(styles.link)}
          href="https://vitejs.dev"
          target="_blank"
        >
          <img class=${getClass(styles.logo)} src=${viteLogo} alt="Vite logo" />
        </a>
        <a
          class=${getClass(styles.link)}
          href="https://lit.dev"
          target="_blank"
        >
          <img
            class=${getClass(styles.logo, styles.logoLit)}
            src=${litLogo}
            alt="Lit logo"
          />
        </a>
      </div>
      <div
        class=${classMap({
          [testRed.class]: true,
          [testBlue.class]: true,
        })}
      >
        Test
      </div>
      <slot></slot>
      <div class=${getClass(styles.card)}>
        <div class=${getClass(styles.box)}>
          <my-button>default default</my-button>
          <my-button big>default default</my-button>
          <my-button veryBig>default default</my-button>
          <my-button red>red default</my-button>
          <my-button red big>red big</my-button>
          <my-button red veryBig>red veryBig</my-button>
          <my-button blue>blue default</my-button>
          <my-button blue big>blue big</my-button>
          <my-button blue veryBig>blue veryBig</my-button>
        </div>
      </div>
      <p class=${getClass(styles.readTheDocs)}>${this.docsHint}</p>
    `;
  }
}

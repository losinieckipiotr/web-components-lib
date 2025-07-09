import * as stylex from '@stylexjs/stylex';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalStyles } from './globalStyles.ts';
import { getClass } from './stylex-helper.ts';

declare global {
  interface HTMLElementTagNameMap {
    'my-link': MyLink;
  }
}

const styles = stylex.create({
  link: {
    fontWeight: 500,
    color: {
      default: '#646cff',
      ':hover': '#535bf2'
    }
  }
});

/**
 * My link component
 */
@customElement('my-link')
export class MyLink extends LitElement {
  static styles = globalStyles()

  /**
   * link href
   */
  @property({ type: String })
  href = ''

  /**
   * link button
   */
  @property({ type: String })
  text = ''

  render() {
    const { href, text } = this

    return html`
      <a
        class=${getClass(styles.link)}
        href=${href}
        @click=${(e: PointerEvent) => e.preventDefault()}
      >
        ${text}
      </a>`
  }
}


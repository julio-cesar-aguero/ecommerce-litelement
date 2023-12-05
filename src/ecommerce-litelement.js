import { LitElement, html, css } from 'lit';
import './components/header';
import './components/products';


class EcommerceLitelement extends LitElement {

  //mobile 375px
  //Desktop: 1440px
  static styles = css`
    
  `;
  render() {
    return html`
      <main-header></main-header>
      <main-products></main-products>
    `;
  }
}

customElements.define('ecommerce-litelement', EcommerceLitelement);
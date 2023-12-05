import { LitElement, html, css } from "lit";
const menuIcon = "../../assets/icons/icon-menu.svg";
const logo = "../../assets/images/logo.svg"
const avatarImage = "../assets/images/image-avatar.png";
import styles from "../styles/header-styles";

export class Header extends LitElement {
  static get styles() {
    return [styles];
  }
  render() {
    return html`
      <header class="header">
        <img class="header__menu-icon" src="${menuIcon}" alt="menu" />
        <img class="header__logo" src="${logo}" alt="" />
        <nav class="header__nav">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div class="header__cart">
          <button>
            <img src="../../assets/icons/icon-cart.svg" alt="">
          </button>
          <img src="${avatarImage}" alt="" />
        </div>
      </header>
    `;
  }
}
customElements.define("main-header", Header);

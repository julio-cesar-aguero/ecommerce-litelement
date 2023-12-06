import { LitElement, html, css } from "lit";
const menuIcon = "../../assets/icons/icon-menu.svg";
const logo = "../../assets/images/logo.svg"
const avatarImage = "../assets/images/image-avatar.png";
import styles from "../styles/header-styles";

export class Header extends LitElement {
  static get properties() {
    return {
      Menu: { type: String },
    };
  }
  static get styles() {
    return [styles];
  }
  constructor() {
    super();
    this.Menu = true;
  }
  firstUpdated() {
    this._resize();
  }
  render() {
    return html`
      <header class="header">
        <img @click="${this._handleOpenMenu}" class="header__menu-icon" src="${menuIcon}" alt="menu" />
        <img class="header__logo" src="${logo}" alt="" />
        <nav id="nav" class="${this.Menu ? 'header__nav header__nav--open' : 'header__nav'}">
        <div class="container-nav__close-menu" >
          <img src="../../assets/images/icon-close.svg" class="nav__close-menu" @click="${this._handleCloseMenu}">
        </div>
        
          <a class="nav__link" href="#">Collections</a>
          <a class="nav__link" href="#">Men</a>
          <a class="nav__link" href="#">Women</a>
          <a class="nav__link" href="#">About</a>
          <a class="nav__link" href="#">Contact</a>
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
  _handleOpenMenu() {
    console.log("click");
    this.Menu = true;
  }
  _handleCloseMenu() {
    console.log("click");
    this.Menu = false;
  }
  _resize() {
    window.addEventListener("resize", () => {
      this.Menu = false;
    });
  }

}
customElements.define("main-header", Header);

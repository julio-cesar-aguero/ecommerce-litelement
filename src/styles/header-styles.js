import { css } from "lit";
export default css`
.header{
    width: 100%;
    height: 100px;
    display: flex;
    gap: 5em;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }
  .header__nav{
    height: 0;
    opacity: 0;
    list-style: none;
    
  }
  .header__nav--open{
    z-index: 100;
    opacity: 1;
    display: flex;
    position: absolute;
    background-color: #f2f2f2;
    width: 300px;
    height: 100vh;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .header__nav .nav__close-menu{
    position: absolute;
    top: 5%;
    right: 5%;
    display: grid;
    place-content: center;
    background-color: transparent;
    width: 30px;
    height: 30px;
    padding: 0em;
    border: none;
    cursor: pointer;
    font-size: 2em;
    font-weight: 800;
    border-radius: 10px;
    transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .header__nav .nav__close-menu:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
  .header__nav .nav__link{
    color: black;
    text-decoration: none;
    font-weight: 900;
    font-size: 1.2em;
    letter-spacing: 0.1em;
    padding: 1.2em 0.7em;
    cursor: pointer;
  }
  .header__menu-icon{
    margin: auto 1em;
    width: 45px;
    height: 25px;
    border-radius: 1px;
    color: black;
  }
  .header__logo{
    position: absolute;
    left: 4.5em;
    width: 150px;
    height: 25px;
  }
  .header__cart{
    height: 60%;
    display: flex;
    gap: 1.5em;
  }
  .header__cart button{
    border: none;
    height: 100%;
    background-color: transparent;
  }
  @media (min-width: 1068px) {
    .header{
      width: 80%;
      gap: 5em;
    }
    .header__menu-icon{
      display: none;
    }
    .header__nav{
      opacity: 1;
      display: flex;
      gap: 2.5em;
      flex: 1;
      justify-content: flex-start;
      align-items: center;
    }
    .header__nav a{
      padding: 0;
      font-weight: 300;
      font-size: 1em;
    }
    .header__logo{
      position: relative;
      left: 0;
      width: 200px;
    }
  }
`;
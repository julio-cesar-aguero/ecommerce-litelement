import { css } from "lit";
export default css`
.header{
    width: 100%;
    height: 100px;
    display: flex;
    gap: 0;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }
  .header__nav{
    display: none;
    list-style: none;
  }
  .header__nav a{
    color: black;
    text-decoration: none;
  }
  .header__menu-icon{
    width: 45px;
    height: 25px;
    border-radius: 1px;
  }
  .header__logo{
    position: absolute;
    left: 10%;
    width: 100px;
    height: 30px;
  }
  .header__cart{
    display: flex;
    gap: 0.5em;
  }
  @media (min-width: 968px) {
    .header{
        width: 100%;
      gap: 5em;
    }
    .header__menu-icon{
      display: none;
    }
    .header__nav{
      display: flex;
      gap: 2.5em;
      flex: 1;
      justify-content: flex-start;
      align-items: center;
      
    }
    .header__logo{
      position: relative;
      left: 0;
      width: 200px;
    }
  }
`;
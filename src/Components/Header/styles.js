import styled from "styled-components";
import { variables } from "../../styles/variables";

export const HeaderContainer = styled.header`
  font-family: ${variables.fonts.montserrat};
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: ${variables.redAccents};

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${variables.white};
    font-size: 28px;
    font-weight: 600;

    img {
      width: 40px;
      height: auto;
    }
  }

  .searchbar {
    flex: 1;
    margin: 0 1rem;

    input {
      width: 50%;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      border: 1px solid ${variables.greenAccents};
      border-radius: 12px;
    }
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      display: flex;
      align-items: center;
      position: relative;
      text-decoration: none;
      color: ${variables.black};

      img {
        width: 24px;
        height: auto;
      }

      .icons-text {
        margin-left: 0.5rem;
        font-size: 14px;
        font-weight: 500;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${variables.grey5};

  .nav-links {
    display: flex;
    gap: 2rem;

    a {
      text-decoration: none;
      color: ${variables.black};
      font-size: 16px;
      font-weight: 500;

      &:hover {
        color: ${variables.primary};
      }

      &.active {
        color: ${variables.secondary};
      }
    }
  }

  .dropdown-menu {
    position: relative;

    p {
      color: ${variables.grey3};
      font-size: 14px;
      font-weight: 400;
      margin: 0;
    }

    /* Здесь можно стилизовать dropdown из Bootstrap, если потребуется */
  }
`;

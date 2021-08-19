import React from "react"
import styled from "styled-components"
import EmailBg from "../assets/images/email.jpg"
import { Button } from "./Button"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Chcesz wiedzieć więcej?</h1>
        <p> Zapisz się na newsletter i bądź z nami na bieżąco!</p>
        <form action="#">
          <FormWrap>
            <label htmlfor="email">
              <input type="email" placeholder="Wpisz swój email" id="email" />
            </label>
          </FormWrap>
          <Button>Zapisz się</Button>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
    background-size: cover;
    height:450px;
    width: 100%;
    padding: 5rem calc ((100vw - 1300px)/2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EmailContent = styled.div``

const FormWrap = styled.div``

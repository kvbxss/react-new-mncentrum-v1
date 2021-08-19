import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>mncentrum</h1>
                    <p>Naszym motto jest #nomercy, ale to nie oznacza, że wyjdziesz ledwo żywy z sali…</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Skontaktuj się z nami</FooterLinkTitle>
                    <FooterLink to="/about">Kontakt</FooterLink>
                    <FooterLink to="/">Wsparcie</FooterLink>
                    <FooterLink to="/">Lokalizacja</FooterLink>
                    <FooterLink to="/">Sponsoring</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>Skontaktuj się z nami</FooterLinkTitle>
                    <FooterLink to="/about">Kontakt</FooterLink>
                    <FooterLink to="/">Wsparcie</FooterLink>
                    <FooterLink to="/">Lokalizacja</FooterLink>
                    <FooterLink to="/">Sponsoring</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/about">Kontakt</FooterLink>
                    <FooterLink to="/">Wsparcie</FooterLink>
                    <FooterLink to="/">Lokalizacja</FooterLink>
                    <FooterLink to="/">Sponsoring</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaDumbbell } from "react-icons/fa"
import { BiDumbbell } from "react-icons/bi"


const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query  {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["testimonial-1", "testimonial-2"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
`      
    )

  return (
    <TestimonialContainer>
      <TopLine>Kto wchodzi w skład MNcentrum?</TopLine>
      <Description></Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
              <FaDumbbell css={`
              font-size: 2rem;
              margin-bottom: 1rem;

              `}/>
            <h3>Mateusz Nastula</h3>
            <p>
              W swojej pracy, jako fizjoterapeuta ruchowy zajmuje się przede
              wszystkim treningiem medycznym oraz neurotreningiem, przywracając
              aparat ruchu do prawidłowych funkcji. Zajmuję się także treningiem
              personalnym i funkcjonalnym, dbając o to, abyście nie zostali
              golemami ruchu. Holistycznie (ostatnio dość modne słowo)
              podchodzę do pacjenta, dobierając jak najlepsze narzędzia pracy do
              danego celu.
            </p>

            <BiDumbbell css={`
            font-size: 2rem;
            margin-bottom: 1rem;
            margin-top: 2rem;
            `}/>
            <h3>Ola Kubińska</h3>
            <p>
              Prowadzę treningi personalne, treningi personalne z gimnastyki,
              zajęcia grupowe, w tym fitness gimnastyczny dla dzieci. Skupiam
              się na odpowiedniej rozgrzewce i technicznych szczegółach, które
              często ratują kręgosłup moich nowych podopiecznych. Ucząc
              elementów gimnastycznych rozkładam je na części pierwsze,
              dostosowując ćwiczenie do możliwości danej osoby.
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
        {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
  ))}
        
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialContainer>
  )
}

export default Testimonials


const TestimonialContainer = styled.div`
    width: 100%;
    background: #001FB8;
    color: white;
    padding: 5rem calc((100vw - 1300px)/2);
    height: 50%;
`

const TopLine = styled.p`
    color: white;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`

const Description = styled.div`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and(max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 0.3fr;
`

const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }
    p {
        color: #D7DFFE ;
    }
`

const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width:500px) {
        grid-template-columns: 1fr;
    }
`

const Images = styled(Img)`
    border-radius: 10px;
    height: 80%;
`
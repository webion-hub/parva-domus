import { Section } from "@/components/Section";
import { ContactUsSection } from "@/components/sections/ContactUsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ServicesSection } from "@/components/sections/ServiceSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { Box, Button, Stack, styled, Typography } from "@mui/material";

const Video = styled('video')({})

export default function Home() {
  return (
    <>
      <Stack
        sx={{ 
          marginTop: 10,
          minHeight: 700,
          maxHeight: 1000,
          height: '90vh',
          width: '100vw',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <Section
          sx={{ 
            zIndex: 1,
            boxSizing: 'border-box',
            height: '100%',
            width: '100%'
          }}
        >
          <Stack
            direction="column"
            spacing={4}
            sx={{ 
              maxWidth: 500,
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              color="#fff"
              sx={{ 
                textShadow: "0px 0px 20px #0000008a"
              }}
            >
              <b>
                Immobliare Parva
                <br/>
                Domus
              </b>
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              sx={{
                textShadow: "0px 0px 20px #0000008a"
              }}
            >
              L&apos; Agenzia Parva Domus è un agenzia ormai radicata nel territorio in grado di garantire, ai propri clienti, siano essi venditori che acquirenti, un altissimo grado di eccellenza nei servizi
            </Typography>
            <Button
              href="#contact-us"
              variant="contained"
              sx={{ 
                textTransform: "none"
              }}
            >
              Ottieni una consulenza gratuita
            </Button>
          </Stack>
        </Section>
        <Video 
          loop 
          autoPlay
          muted
          sx={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            objectFit: 'cover'
          }}
        >
          <source src="./assets/videos/home.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </Video>
      </Stack>

      <WhoWeAreSection id="who-we-are"/>
      <ServicesSection id="services"/>
      <FaqSection id="faq"/>
      <ContactUsSection id="contact-us"/>
    </>
  )
}



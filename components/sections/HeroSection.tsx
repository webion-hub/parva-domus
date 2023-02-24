import { BaseSectionProps, Section } from "@/components/Section";
import { alpha, Button, Paper, Stack, styled, Typography } from "@mui/material";

const Video = styled('video')({})

export function HeroSection(props: BaseSectionProps) {
  return (
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
        {...props}
        sx={{ 
          zIndex: 1,
          boxSizing: 'border-box',
          height: '100%',
          width: '100%'
        }}
      >
        <Stack
          component={Paper}
          direction="column"
          spacing={4}
          sx={{ 
            background: theme => ({
              xs: alpha('#000', 0.2),
              md: alpha(theme.palette.background.default, 0.2),
            }),
            maxWidth: 550,
            padding: { xs: 4, md: 6 },
            boxShadow: '10px 10px 20px 0px #00000038',
            backdropFilter: { xs: undefined, md: 'blur(16px)'}
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            color="#fff"
          >
            <b>
              Immobiliare Parva
              <br/>
              Domus
            </b>
          </Typography>
          <Typography
            variant="body1"
            color="#fff"
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
            Ottieni una consulenza
          </Button>
        </Stack>
      </Section>
      <Video 
        loop 
        playsInline
        autoPlay
        muted
        sx={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          objectFit: 'cover'
        }}
      >
        <source src="./assets/videos/home.webm" type="video/webm"/>
        <source src="./assets/videos/home.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </Video>
    </Stack>
  )
}
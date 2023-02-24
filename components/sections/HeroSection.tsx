import { BaseSectionProps, Section } from "@/components/Section";
import { Button, Paper, Stack, styled, Typography, useMediaQuery, useTheme } from "@mui/material";

const Video = styled('video')({})

export function HeroSection(props: BaseSectionProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(330));
  
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
          position: 'relative',
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
            position: { xs: 'absolute !important', sm: 'relative !important' },
            left: { xs: 32, sm: 0 },
            right: { xs: 32, sm: 0 },
            bottom: 64,
            background: theme => theme.palette.background.default,
            maxWidth: 550,
            padding: { xs: 2, md: 6 },
            boxShadow: '10px 10px 20px 0px #00000038',
          }}
        >
          <Typography
            variant={isSmall ? "h4" : "h2"}
            component="h1"
            color="#000000cc"
          >
            <b>
              Immobiliare Parva
              <br/>
              Domus
            </b>
          </Typography>
          <Typography
            color="#000000bb"
          >
            L&apos; Agenzia Parva Domus è un agenzia ormai radicata nel territorio in grado di garantire, ai propri clienti, siano essi venditori che acquirenti, un altissimo grado di eccellenza nei servizi
          </Typography>
          <Button
            href="#contact-us"
            variant="contained"
            size="large"
            sx={{ 
              textTransform: "none"
            }}
          >
            Contattaci
          </Button>
        </Stack>
      </Section>
      <Video 
        loop 
        playsInline
        autoPlay
        muted
        sx={{
          height: { xs: '80%', md: '100%'},
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
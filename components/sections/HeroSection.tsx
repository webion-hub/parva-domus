import { BaseSectionProps, Section } from "@/components/Section";
import PhoneRounded from "@mui/icons-material/PhoneRounded";
import { alpha, Box, Button, Paper, Stack, styled, Typography, useMediaQuery, useTheme } from "@mui/material";

const Video = styled('video')({})

export function HeroSection(props: BaseSectionProps) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(330));
  
  return (
    <Stack
      sx={{ 
        marginTop: 10,
        minHeight: 550,
        maxHeight: 900,
        height: theme => `calc(90vh - ${theme.spacing(10)})`,
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        "&::before": {
          content: "''",
          width: '100%',
          height: '100%',
          position: 'absolute',
          background: theme => alpha(theme.palette.primary.main, 0.5),
          zIndex: 1,
        }
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
          direction="column"
          spacing={4}
          sx={{
            position: { xs: 'absolute !important', sm: 'relative !important' },
            left: { xs: 32, sm: 0 },
            right: { xs: 32, sm: 0 },
            bottom: 32,
            maxWidth: 550,
            padding: { xs: 2, md: 3 },
          }}
        >
          <Typography
            variant={isSmall ? "h4" : "h3"}
            component="h1"
            color="white"
          >
            <b>
              Immobiliare Parva
              <br/>
              Domus
            </b>
          </Typography>
          <Typography
            color="white"
          >
            Parva Domus è uno studio di consulenza immobiliare radicato nel territorio in grado di garantire, ai propri clienti, sia venditori che acquirenti, sia locatori che conduttori, un&apos;assistenza eccellente a livello totale..
          </Typography>
          <Box>
            <Button
              href="#contact-us"
              variant="contained"
              size="large"
              startIcon={<PhoneRounded/>}
              sx={{ 
                textTransform: "none"
              }}
            >
              Contattaci
            </Button>
          </Box>
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
        <source src="./assets/videos/home.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </Video>
    </Stack>
  )
}
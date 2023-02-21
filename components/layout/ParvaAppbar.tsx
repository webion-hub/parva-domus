import { AppBar, Button, ButtonBase, Stack, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function ParvaAppbar() {
  const [fill, setFill] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const isAfterQuarterScreen = window.scrollY > window.innerHeight / 4 
    setFill(isAfterQuarterScreen)
  }

  return (
    <AppBar
      sx={{
        transitionProperty: 'padding-top, background, box-shadow',
        transitionDuration: '250ms',
        borderRadius: 0,
        paddingTop: fill ? 0 : 2,
        background: theme => fill 
          ? theme.palette.background.default 
          : 'transparent',
        boxShadow: fill 
          ? undefined 
          : 'none',
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            margin: 'auto',
            width: '100%',
            maxWidth: theme => theme.layoutMaxWidth?.appbar,
          }}
        >
          <Button href="#">
            <Typography 
              variant="h4" 
              color="text.primary"
            >
              Parva Domus
            </Typography>  
          </Button>
          <Stack
            direction="row"
            spacing={4}
          >
            <Button 
              href="#"  
            >
              Home
            </Button>
            <Button 
              href="#who-we-are"
            >
              Chi siamo
            </Button>
            <Button 
              href="#services"
            >
              Servizi
            </Button>
            <Button 
              href="#faq"
            >
              FAQ
            </Button>
            <Button 
              variant="contained"
              href="#contact-us"
            >
              Contattaci
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
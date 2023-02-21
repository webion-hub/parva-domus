import { CallRounded, MenuRounded } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { links } from "../lib/layoutLinks";
import { ParvaSidebar, useSidebar } from './ParvaSidebar'

export function ParvaAppbar() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const { toggle } = useSidebar()

  const [fill, setFill] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const isAfterQuarterScreen = window.scrollY > window.innerHeight / 4 
    setFill(isAfterQuarterScreen)
  }

  const sideBarBtn = 
    <IconButton
      color="primary"
      onClick={toggle}
    >
      <MenuRounded/>
    </IconButton>

  const smallContactUsBtn = 
    <IconButton
      href="#contact-us"
      color="primary"
    >
      <CallRounded/>
    </IconButton>

  const bigContactUsBtn =   
    <Button 
      variant="contained"
      href="#contact-us"
    >
      Contattaci
    </Button>

  const contactUsBtn = isMd
    ? bigContactUsBtn
    : smallContactUsBtn

  return (
    <>
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
                variant={isMd ? "h4" : "h5"} 
                color="text.primary"
              >
                Parva Domus
              </Typography>  
            </Button>
            <Stack
              direction="row"
              spacing={{ xs: 1, md: 4 }}
            >
              {
                isMd && 
                <>
                  {
                    links.map((link, index) => (
                      <Button
                        key={index}
                        href={link.href} 
                      >
                        {link.label}
                      </Button>
                    ))
                  }
                </>
              }
              {contactUsBtn}
              {!isMd && sideBarBtn}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      {!isMd && <ParvaSidebar/>}
    </>
  )
}


import { useNextNavigator } from "@/lib/useNextNavigator";
import { CallRounded, MenuRounded } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { links } from "../../lib/layoutLinks";
import { NextImg } from "../NextImg";
import { ParvaSidebar, useSidebar } from './ParvaSidebar';

export function ParvaAppbar() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const { toggle } = useSidebar()
  const { clickNavigate } = useNextNavigator()

  const [expand, setExpand] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const isAfterQuarterScreen = window.scrollY > window.innerHeight / 4 
    setExpand(isAfterQuarterScreen)
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
      color="primary"
      href="#contact-us"
      onClick={clickNavigate('/#contact-us')}
    >
      <CallRounded/>
    </IconButton>

  const bigContactUsBtn =   
    <Button 
      variant="contained"
      href="/#contact-us"
      onClick={clickNavigate('/#contact-us')}
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
          transitionProperty: 'padding',
          transitionDuration: '250ms',
          borderRadius: 0,
          padding: expand ? 0 : 1,
          paddingInline: 0,
          background: theme => theme.palette.background.default,
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
            <Button 
              href="/#"
              onClick={clickNavigate('/#')}
              sx={{ 
                position: 'relative',
              }}
            >
              <NextImg
                alt="logo"
                src={
                  isMd 
                    ? "/assets/images/logo.png"
                    : "/assets/images/small-logo.png"
                }
                auto={{ width: 'auto', height: '56px' }}
                sx={{ 
                  transitionProperty: 'transform',
                  transitionDuration: '250ms',
                  objectFit: 'cover',
                  transform: { 
                    xs: 'scale(0.75)', 
                    md: expand 
                      ? 'scale(1)' 
                      : 'scale(1.25)' 
                  }
                }}
              /> 
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
                        onClick={clickNavigate(link.href)}
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


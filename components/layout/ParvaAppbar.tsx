import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

export function ParvaAppbar() {
  return (
    <AppBar
      sx={{
        background: 'transparent',
        boxShadow: 'none',
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
            maxWidth: theme => theme.layoutMaxWidth?.appbar
          }}
        >
          <Typography variant="h4" color="text.primary">
            Parva Domus
          </Typography>
          <Stack
            direction="row"
            spacing={4}
          >
            <Button 
              color="info"
              href="#"  
            >
              Home
            </Button>
            <Button 
              color="info"
              href="#who-we-are"
            >
              Chi siamo
            </Button>
            <Button 
              color="info"
              href="#services"
            >
              Servizi
            </Button>
            <Button 
              color="info"
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
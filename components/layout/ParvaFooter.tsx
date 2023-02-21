import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";
import { Button, IconButton, Link, Stack, Typography } from "@mui/material";
import { Section } from "../Section";

export function ParvaFooter() {
  return (
    <Section>
      <Stack
        direction="column"
        sx={{
          marginTop: 20,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Stack
            direction="column"
            spacing={4}
          >
            <Typography variant="h4" color="text.primary">
              Parva Domus
            </Typography>
            <Stack spacing={1}>
              <Typography color="text.secondary">
                PIVA: 11696210969
              </Typography>
              <Link color="text.secondary">
                Via Emilia Bis 18, San Donato Milanese MI 20097
              </Link>
              <Typography color="text.secondary">
                PEC:&nbsp;
                <Link color="text.secondary">
                  parvadomussdm@pec.it
                </Link>
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            spacing={4}
            sx={{ marginTop: { xs: 6, md: 0 } }}
          >
            <Stack 
              direction="row"
              flexWrap="wrap"
            >
              <Button 
                color="secondary"
                href="#"  
              >
                Home
              </Button>
              <Button 
                color="secondary"
                href="#who-we-are"  
              >
                Chi siamo
              </Button>
              <Button 
                color="secondary"
                href="#services" 
              >
                Servizi
              </Button>
              <Button 
                color="secondary"
                href="#faq" 
              >
                FAQ
              </Button>
              <Button 
                color="secondary"
                href="#contact-us" 
              >
                Contattaci
              </Button>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
            >
              <IconButton>
                <FacebookRounded/>
              </IconButton>
              <IconButton>
                <Instagram/>
              </IconButton>
              <IconButton>
                <LinkedIn/>
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            marginTop: 4,
            marginBottom: 8
          }}
        >
          <Link
            variant="caption"
            color="text.secondary"
            href="https://www.webion.it"
            target="_blank"
          >
            Made with ❤️ by Webion Srl
          </Link>
          <Link
            variant="caption"
            color="text.secondary"
          >
            Privacy Policy
          </Link>
        </Stack>
      </Stack>
    </Section>
  )
}
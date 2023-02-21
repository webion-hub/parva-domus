import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";
import { Button, IconButton, Link, Stack, Typography } from "@mui/material";
import { ParvaRepository } from "../lib/ParvaRepository";
import { Section } from "../Section";

export function ParvaFooter() {
  return (
    <Section>
      <Stack
        direction="column"
        sx={{
          marginTop: 12,
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
              <Link 
                color="text.secondary"
                target="_blank"
                href={ParvaRepository.addressLink}  
              >
                {ParvaRepository.address}
              </Link>
              <Typography color="text.secondary">
                Email:&nbsp;
                <Link 
                  color="text.secondary"
                  href={`mailto: ${ParvaRepository.email}`}
                >
                {ParvaRepository.email}
                </Link>
              </Typography>
              <Typography color="text.secondary">
                PEC:&nbsp;
                <Link 
                  color="text.secondary"
                  href={`mailto: ${ParvaRepository.PEC}`}
                >
                {ParvaRepository.PEC}
                </Link>
              </Typography>
              <Typography color="text.secondary">
                PIVA: {ParvaRepository.PIVA}
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
              <IconButton
                target="_blank"
                href={ParvaRepository.facebookLink}
              >
                <FacebookRounded/>
              </IconButton>
              <IconButton
                target="_blank"
                href={ParvaRepository.instagramLink}
              >
                <Instagram/>
              </IconButton>
              <IconButton
                target="_blank"
                href={ParvaRepository.linkedinLink}
              >
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
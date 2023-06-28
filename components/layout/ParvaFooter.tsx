import { links } from "@/lib/layoutLinks";
import { useNextNavigator } from "@/lib/useNextNavigator";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import { Twitter } from "@mui/icons-material";
import { Button, IconButton, Link, Stack, Typography } from "@mui/material";
import { ParvaRepository } from "../../lib/ParvaRepository";
import { NextImg } from "../NextImg";
import { Section } from "../Section";

export function ParvaFooter() {
  const { clickNavigate } = useNextNavigator()

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
            <Button 
              href="#"
              sx={{ 
                position: 'relative', 
                maxWidth: 250 
              }}
            >
              <NextImg
                alt="logo"
                src="/assets/images/logo.png"
                auto={{ width: '100%', height: '56px' }}
                sx={{ 
                  objectFit: 'contain',
                }}
              /> 
            </Button>
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
              {
                links.map((link, index) => (
                  <Button
                    key={index}
                    color="secondary"
                    href={link.href}
                    onClick={clickNavigate(link.href)}
                  >
                    {link.label}
                  </Button>
                ))
              }
              <Button 
                color="secondary"
                href="/#contact-us"
                onClick={clickNavigate('/#contact-us')}
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
                href={ParvaRepository.twitterLink}
              >
                <Twitter/>
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
            href="/privacy"
            target="_blank"
          >
            Privacy Policy
          </Link>
        </Stack>
      </Stack>
    </Section>
  )
}
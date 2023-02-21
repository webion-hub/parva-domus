import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, IconButton, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import { ParvaRepository } from "../lib/ParvaRepository";
import { BaseSectionProps, Section } from "../Section";

export function ContactUsSection(props: BaseSectionProps) {
  return (
    <Section {...props}>
      <Typography 
        variant="h3" 
        color="text.primary"
        sx={{
          marginBottom: 4
        }}
      >
        Contattaci
      </Typography>
      <Stack
        direction={{xs: "column", md: "row"}}
        spacing={8}
        sx={{
          "& > *": {
            width: '100%'
          }
        }}
      >
        <Stack
          direction="column"
        >
          <Stack 
            direction={{ xs: "column", md: "row"}}
            spacing={3}
            sx={{ marginBottom: 4 }}  
          >
            <Contact
              label="Email"
              href={`mailto: ${ParvaRepository.email}`}
              contact={ParvaRepository.email}
            />
            <Contact
              label="Telefono"
              href={`tel: ${ParvaRepository.phone}`}
              contact={ParvaRepository.phone}
            />
            <Stack
              direction="column"
              spacing={1}
            >
              <Typography sx={{ marginLeft: 1 }}>
                Social
              </Typography>
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
          <Paper
            sx={{ 
              overflow: 'hidden',
              position: 'relative',
              height: { xs: 350, md: '100%' },
              maxWidth: { xs: '100%', md: 540},
              "& > *": {
                border: 'none',
                width: '100%',
                minHeight: { xs: 350, md: '100%' }
              }
            }}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5601.339774871886!2d9.26238!3d45.415996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786cf7fc8eb8443%3A0xfd4b3394e1895b0f!2sParva%20Domus%20Consulenze%20E%20Gestione%20Immobili!5e0!3m2!1sit!2sit!4v1676991303420!5m2!1sit!2sit" loading="lazy" />
          </Paper>
        </Stack>
        <Stack
          direction="column"
          spacing={4}
        >
          <TextField label="Nome" variant="filled"/>
          <TextField label="Email" variant="filled"/>
          <TextField 
            label="Messaggio" 
            variant="filled"
            multiline
            rows={8}  
          />
          <LoadingButton 
            variant="contained"
            size="large"  
          >
            Invia
          </LoadingButton>
        </Stack>
      </Stack>
    </Section>
  )
}


interface ContactProps {
  readonly label: string,
  readonly contact: string,
  readonly href: string,
}

function Contact(props: ContactProps) {
  return (
    <Stack 
      direction="column"
      justifyContent="space-between"
    >
      <Typography>
        {props.label}
      </Typography>
      <Link 
        color="text.secondary"
        href={props.href}
        sx={{
          marginBottom: 1
        }}  
      >
        {props.contact}
      </Link>
    </Stack>
  )
}
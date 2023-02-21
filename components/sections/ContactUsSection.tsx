import { FacebookRounded, Instagram, LinkedIn } from "@mui/icons-material";
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, IconButton, Link, Paper, Stack, TextField, Typography } from "@mui/material";
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
            direction="row"
            spacing={3}
            sx={{ marginBottom: 4 }}  
          >
            <Contact
              label="Email"
              contact="info@parvadomussdm.it"
            />
            <Contact
              label="Telefono"
              contact="380 1866959"
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.673166145685!2d9.262272689748812!3d45.41592989149791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786cf7fc8ea332f%3A0x56338eb108447a1c!2sVia%20Emilia%20bis%2C%2018%2C%2020097%20San%20Donato%20Milanese%20MI!5e0!3m2!1sit!2sit!4v1676976627007!5m2!1sit!2sit" loading="lazy" />
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
  readonly onClick?: () => void
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
        sx={{
          marginBottom: 1
        }}  
      >
        {props.contact}
      </Link>
    </Stack>
  )
}
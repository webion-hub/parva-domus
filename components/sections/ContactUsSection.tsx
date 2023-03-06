import { EmailBody } from "@/lib/contactus/endpoints/ContactUsEndpoint";
import { contactUsApi } from "@/pages/_app";
import FacebookRounded from "@mui/icons-material/FacebookRounded";
import Instagram from "@mui/icons-material/Instagram";
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, Checkbox, Divider, FormControlLabel, IconButton, Link, Paper, Snackbar, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { ParvaRepository } from "../../lib/ParvaRepository";
import { Contact } from "../Contact";
import { ContactGroup } from "../ContactGroup";
import { BaseSectionProps, Section } from "../Section";
import { SectionTitle } from "../SectionTitle";

interface ValueStatus<T> {
  readonly value: T,
  readonly error: boolean,
}

type EmailStatus<T> = {
  [key in keyof T]:  ValueStatus<T[key]>
} 

const defaultValue: EmailStatus<EmailBody> = {
  email: { value: '', error: false },
  msg: { value: '', error: false },
  name: { value: '', error: false },
}

export function ContactUsSection(props: BaseSectionProps) {
  const [privacy, setPrivacy] = useState(true)
  const [status, setStatus] = useState<'none' | 'loading' | 'error' | 'success'>('none')
  const [email, setEmail] = useState<EmailStatus<EmailBody>>(defaultValue)

  const emailValueArr = Object.entries(email).map(e => [e[0], e[1].value])
  const emailValue = Object.fromEntries(emailValueArr)

  const handleChange = (key: keyof EmailBody) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail({
      ...email,
      [key]: {
        value: e.target.value,
        error: false
      },
    })
  }
  
  const handleSubmit = (e: any) => {
    e.preventDefault()
    
    const areErrors = checkErrors() 
    if(areErrors)
      return;

    setStatus('loading')
    contactUsApi
      .contactUs
      .process(emailValue)
      .then(() => handleStatus('success'))
      .catch(() => handleStatus('error'))
  }

  const handleStatus = (status: 'success' | 'error') => {
    setStatus(status)
    setEmail(defaultValue)
  }

  const checkErrors = () => {
    const isNameOk = email.name.value.length > 0;
    const isEmailOk = !!email
      .email
      .value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    const isMsgOk = email.msg.value.length > 0;

    setEmail({
      email: { value: email.email.value, error: !isEmailOk },
      name: { value: email.name.value, error: !isNameOk },
      msg: { value: email.msg.value, error: !isMsgOk },
    })

    return !(isNameOk && isEmailOk && isMsgOk)
  }

  return (
    <Section {...props}>
      <SectionTitle 
        variant="h3" 
        sx={{
          marginBottom: 4
        }}
      >
        Contattaci
      </SectionTitle>
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
            divider={<Divider orientation="vertical" flexItem />}
          >
            <ContactGroup
              label="Telefono"
              contacts={ParvaRepository.phone}
            />
            <Contact
              label="Email"
              href={`mailto: ${ParvaRepository.email}`}
              contact={ParvaRepository.email}
            />
            <Stack
              direction="column"
              spacing={1}
            >
              <Typography>
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
          component="form"
          direction="column"
          spacing={4}
          onSubmit={handleSubmit}
        >
          <TextField
            required
            label="Nome" 
            variant="filled"
            error={email.name.error}
            value={email.name.value}
            disabled={status === "loading"}
            onChange={handleChange('name')}
          />
          <TextField
            required
            label="Email" 
            variant="filled"
            error={email.email.error}
            value={email.email.value}
            disabled={status === "loading"}
            onChange={handleChange('email')}
          />
          <TextField
            required
            label="Messaggio" 
            variant="filled"
            multiline
            rows={8}
            error={email.msg.error}
            value={email.msg.value}
            disabled={status === "loading"}
            onChange={handleChange('msg')}
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => setPrivacy(!privacy)} 
                checked={privacy}
              />
            } 
            label={
              <Typography variant="body2">
                Ho preso visione dell&apos;
                <Link
                  href="/privacy"
                  target="_blank"
                >
                  Informativa sulla privacy
                </Link>
              </Typography>
            } 
          />
          <LoadingButton
            loading={status === 'loading'}
            type="submit"
            variant="contained"
            size="large"
            onClick={handleSubmit}
            disabled={!privacy}
          >
            Invia
          </LoadingButton>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={status === 'success' || status === "error"}
            onClose={() => setStatus('none')}
            autoHideDuration={4000}
            message="Messaggio inviato!"
          >
            <Alert
              onClose={() => setStatus('none')}
              severity={status === "success" ? "success" : "error"} 
              sx={{ width: '100%' }}
            >
              { 
                status === "success"
                  ? "Messaggio inviato!"
                  :  "C'è stato un errore!"
              }
            </Alert>
          </Snackbar>
        </Stack>
      </Stack>
    </Section>
  )
}
import { Paper, Stack } from "@mui/material";
import { NextImg } from "../NextImg";
import { Question } from "../Question";
import { BaseSectionProps, Section } from "../Section";
import { SectionTitle } from "../SectionTitle";

export function FaqSection(props: BaseSectionProps) {
  return (
    <Section {...props}>
      <Stack
        direction={{xs: "column", md: "row"}}
        spacing={8}
        sx={{
          "& > *": {
            width: '100%'
          }
        }}
      >
        <Paper
          sx={{ 
            overflow: 'hidden',
            position: 'relative',
            minHeight: 250,
            maxWidth: { xs: '100%', md: 400},
          }}
        >
          <NextImg
            src="/assets/images/faq.jpeg"
            alt="faq"
            fill
            sizes="
              (max-width: 700px) 100vw,
              (max-width: 1327px) 50vw,
              600px
            "
            sx={{
              objectFit: 'cover',
            }}
          />
        </Paper>
        <Stack>
          <SectionTitle
            variant="h3" 
            textAlign="center"
          >
            Faq
          </SectionTitle>
          <Stack
            direction="column"
            spacing={2}
          >
            <Question 
              defaultExpanded
              title="Quanto vale il mio immobile al metro quadro?"
              description="
              Potete richiedere una valutazione della proprietà da parte dei nostri agenti immobiliari, che nella loro stima terranno conto di tutte le caratteristiche e delle particolarità dell'immobile. A tal fine, basta contattarci online. I servizi, sono gratuiti e senza impegno per voi."
            />
            <Question 
              title="Quali spese, tasse e oneri si pagano quando si vende o si acquista un immobile?"
              description={<>
                L’acquirente deve sostenere:
                <ul>
                  <li>Le spese notarili;</li>
                  <li>La tassazione prima o seconda casa, che viene calcolata sulla rendita catastale, se si parla di immobile residenziale;</li> 
                  <li>Il venditore deve sostenere la redazione della Relazione Tecnica integrata; eventuali sanatorie, nel caso risultino abusi all’interno dell’immobile;</li>
                  <li>La predisposizione dell’Attestato di Prestazione Energetica</li>
                </ul>
              </>}
            />
            <Question 
              title="Posso richiedere un mutuo per acquistare un immobile all'asta?"
              description="Certamente, i 120 giorni successivi all'aggiudicazione, ci permetteranno di assistere il cliente per tutte le pratiche e le richieste dell'ente creditizio."
            />
            <Question 
              title="Quali garanzie ha il proprietario che concede in locazione un immobile?"
              description="Prima di consegnare le chiavi dell’alloggio, il proprietario di casa richiede generalmente la consegna di una somma di denaro, il deposito cauzione, che potrà essere usata per coprire eventuali danni causati dall’inquilino. La cauzione viene affidata in deposito e matura degli interessi, che spettano di diritto agli inquilini."
            />
            <Question
              title="Quanto vale il mio immobile al metro quadro?"
              description="Potete richiedere una valutazione della proprietà da parte dei nostri agenti immobiliari, che nella loro stima terranno conto di tutte le caratteristiche e delle particolarità dell'immobile. A tal fine, basta contattarci online. I servizi, sono gratuiti e senza impegno per voi."
            />
          </Stack>
        </Stack>
      </Stack>
    </Section>
  )
}

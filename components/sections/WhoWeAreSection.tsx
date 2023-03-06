import { Paper, Stack, Typography } from "@mui/material";
import { NextImg } from "../NextImg";
import { BaseSectionProps, Section } from "../Section";
import { SectionTitle } from "../SectionTitle";

export function WhoWeAreSection(props: BaseSectionProps) {
  return (
    <Section {...props}>
      <SectionTitle>
        Chi siamo
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
        <Paper
          sx={{ 
            overflow: 'hidden',
            position: 'relative',
            minHeight: 350,
            maxWidth: { xs: '100%', md: 540},
          }}
        >
          <NextImg
            src="/assets/images/who-we-are.jpeg"
            alt="who-we-are"
            fill
            sizes="
              (max-width: 700px) 100vw,
              (max-width: 1327px) 50vw,
              600px
            "
            sx={{
              objectFit: 'cover'
            }}
          />
        </Paper>
        <Typography color="text.secondary">
          Il nostro studio è composto da un team di professionisti specializzati in Locazioni brevi/a lungo termine(immobili residenziali), Affitti (immobili commerciali), Aste, Fallimenti, Saldi e Stralci.
          <br/>
          <br/>
          Verifichiamo con diversi controlli, la solvibilità dei nostri inquilini garantendo ai proprietari una locazione in piena sicurezza, grazie anche a prodotti assicurativi mirati alle locazioni. Questi vanno a tutelare il locatore, sia per eventuali danni subiti, sia per il mancato pagamento del canone fino a dodici mesi.
          <br/>
          <br/>
          Ci occupiamo della gestione burocratica del contratto di locazione e delle operazioni ad esso connesse (dalle pulizie alla manutenzione ordinaria e straordinaria dell&apos;appartamento), sollevando il locatore da ogni pensiero.
          <br/>
          <br/>
          Collaboriamo direttamente con le principali aziende presenti sul territorio cittadino e limitrofo (Gruppo ENI, SAIPEM, SKY, Gruppo ospedaliero San Donato e BMW Italia) fornendo alloggi aziendali per i propri dipendenti e collaboratori esterni, anche per brevi periodi.
          <br/>
          <br/>
          Inoltre, abbiamo una rete di appartamenti/affitta camere ideali per corpo docente, con locazione di pochi mesi.
        </Typography>
      </Stack>
    </Section>
  )
}
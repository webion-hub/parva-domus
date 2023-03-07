import { useOnScreen } from "@/lib/useOnScreen";
import { Grow, Link, Stack } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { useRef } from "react";
import { NextImg } from "../NextImg";
import { BaseSectionProps, Section } from "../Section";
import { SectionTitle } from "../SectionTitle";
import { ServiceCard } from "../ServiceCard";

export function ServicesSection(props: BaseSectionProps) {
  const ref = useRef()
  const onScreen = useOnScreen(ref, {
    oneTime: true,
    observeOptions: {
      rootMargin: '-10% 0% -10% 0%',
    },
  }) 

  return (
    <Section {...props}>
      <Stack
        ref={ref}
        direction="column"
        alignItems="center"
      >
        <SectionTitle
          alignItems="center"
        >
          Servizi
        </SectionTitle>
        <Grid
          container
          spacing={6}
          columns={{ xs: 1, sm: 2, lg: 3 }}
        >
          <Grid xs={1}>
            <ServiceCard
              in={onScreen}
              delay={150}
              title="Affitti"
              description="Gestione locazioni. Ci occupiamo della gestione burocratica pre-contrattuale (Controlli documentazione clienti e loro solvibilità) e pratiche post-contrattuali (rinnovi e chiusure)."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              in={onScreen}
              delay={300}
              title="Vendite"
              description="Assistenza e ricerca all'acquisto di immobili residenziali, commerciali, capannoni e terreni. Consulenza e assistenza totale per acquisto tramite aste e fallimenti."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              in={onScreen}
              delay={450}
              title="Gestione affitti brevi"
              description="Tipologia di locazioni in punti strategici nelle vicinanze delle sedi di ENI, SAIPEM, SKY, Gruppo Ospedaliero San Donato, BMW Italia, CERVED e UNIPOL Assicurazioni."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              in={onScreen}
              delay={600}
              title="Ristrutturazioni"
              description="Partnership rinnovata con l'azienda C.L.R IMPIANTI DI GERACE CRISTIAN, che si occupa della ristrutturazione chiavi in mano del vostro appartamento con una rete di artigiani professionisti nel settore da decenni."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              in={onScreen}
              delay={750}
              title="Consulenza mutuo"
              description={
                <>
                  I nostri clienti verranno seguiti dai migliori broker creditizi, che garantiranno la massima affidabilità e serietà nel trovare il prodotto a loro più indicato, nel più breve tempo possibile.
                  <br/>
                  <Link 
                    href="https://www.credipass.it/consulenti/milano-giovanni-grieco/" 
                    target="_blank"
                  >
                    Credipass
                  </Link>
                </>
              }
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              in={onScreen}
              delay={900}
              title="Gestione utenze luce e gas"
              description={
                <>
                  Come corner ufficiali <Link href="https://www.unoenergy.it/?gclid=CjwKCAiAr4GgBhBFEiwAgwORrX84nFR7GdsXZFiwdL_XcrrFMjx2W_y_jro68VM85PB1l4_1TOxCSxoCM7gQAvD_BwE">Unoenergy</Link>, siamo al tuo fianco e lavoriamo per rendere le tue utenze più efficienti.
                </>
              }
            />
          </Grid>
        </Grid>
      </Stack>
      <Grid
        container
        columns={{ xs: 1, md: 3 }}
        sx={{
          marginTop: 12,
          "& > *": {
            height: 150,
            position: 'relative',
            "& > *": {
              objectFit: 'contain',
            }
          }
        }}
      >
        <Grid xs={1}>
          <NextImg
            src="/assets/images/service-1.png"
            alt="service-1"
            fill
          />
        </Grid>
        <Grid xs={1}>
          <NextImg
            src="/assets/images/service-3.png"
            alt="service-3"
            fill
          />
        </Grid>
        <Grid xs={1}>
          <NextImg
            src="/assets/images/service-2.png"
            alt="service-2"
            fill
          />
        </Grid>
      </Grid>
    </Section>
  )
}
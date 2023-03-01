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
              description="Gestione locazioni. Ci occupiamo della gestione burocratica pre-contrattuale (Controlli documentazione clienti e loro solvibilità) e pratiche post-contrattuali (rinnovi e chiusure contrattuali)."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              in={onScreen}
              delay={300}
              title="Vendite"
              description="Assistenza e ricerca all'acquisto di immobili residenziali, commerciali, capannoni e terreni."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              in={onScreen}
              delay={450}
              title="Gestione affitti brevi"
              description="Tipologia di locazioni molto richiesta soprattutto in zone di interesse quali, poli lavorativi o il Centro Ospedaliero San Donato."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              in={onScreen}
              delay={600}
              title="Ristrutturazioni"
              description="Consolidata partnership con C.L.R IMPIANTI DI GERACE CRISTIAN, con artigiani che operano nel settore da decenni."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              in={onScreen}
              delay={750}
              title="Consulenza mutuo"
              description={
                <>
                  Offriamo ai nostri clienti la migliore consulenza in materia creditizia.
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
              description="Come corner ufficiali Unoenergy, siamo al tuo fianco e lavoriamo per rendere le tue utenze più efficienti."
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
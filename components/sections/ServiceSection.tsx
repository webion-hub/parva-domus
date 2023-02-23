import { Stack, Typography } from "@mui/material";
import { BaseSectionProps, Section } from "../Section";
import Grid from '@mui/material/Unstable_Grid2';
import { ServiceCard } from "../ServiceCard";
import { SectionTitle } from "../SectionTitle";

export function ServicesSection(props: BaseSectionProps) {
  return (
    <Section {...props}>
      <Stack
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
              title="Affitti"
              description="Gestione locazioni e controllo documentale inquilini"
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              title="Vendite"
              description="Acquista in tutta sicurezza la tua casa con uno sconto fino al 50%"
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              title="Gestione affitti brevi"
              description="Tipologia di locazioni molto richiesta soprattutto in zone di interesse quali, poli lavorativi o il Centro Ospedaliero San Donato"
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              title="Ristrutturazioni"
              description="Nome società a cui ci appoggiamo"
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              title="Consulenza mutuo"
              description="Descrizione del nostro partner creditizio e del consulente con cui collaboriamo"
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              title="Gestione utenze luce e gas"
              description="Essendo corner store UNOENERGY andremo ad inserire queste informazioni"
            />
          </Grid>
        </Grid>
      </Stack>
    </Section>
  )
}
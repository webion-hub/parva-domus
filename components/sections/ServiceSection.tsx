import { Link, Stack, Typography } from "@mui/material";
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
              description="Gestione locazioni. Ci occupiamo della gestione burocratica pre-contrattuale (Controlli documentazione clienti e loro solvibilità) e pratiche post-contrattuali (rinnovi e chiusure contrattuali)."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              title="Vendite"
              description="Assistenza e ricerca all'acquisto di immobili residenziali, commerciali, capannoni e terreni."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              title="Gestione affitti brevi"
              description="Tipologia di locazioni molto richiesta soprattutto in zone di interesse quali, poli lavorativi o il Centro Ospedaliero San Donato."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
              title="Ristrutturazioni"
              description="Consolidata partnership con C.L.R IMPIANTI DI GERACE CRISTIAN, con artigiani che operano nel settore da decenni."
            />
          </Grid>
          <Grid xs={1}>
            <ServiceCard
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
              title="Gestione utenze luce e gas"
              description="Come corner ufficiali Unoenergy, siamo al tuo fianco e lavoriamo per rendere le tue utenze più efficienti."
            />
          </Grid>
        </Grid>
      </Stack>
    </Section>
  )
}
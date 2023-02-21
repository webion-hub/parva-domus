import { ExpandMoreRounded } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

interface QuestionProps {
  readonly title: string;
  readonly description: string;
  readonly defaultExpanded?: boolean; 
}

export function Question(props: QuestionProps) {
  return (
    <Accordion
    defaultExpanded={props.defaultExpanded}
      sx={{
        background: 'transparent',
        boxShadow: 'none'
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreRounded color="primary"/>}
      >
        <Typography color="text.primary">
          <b>Accordion 1</b>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
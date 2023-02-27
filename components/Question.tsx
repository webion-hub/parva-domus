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
          <b>{props.title}</b>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="text.secondary">
          {props.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
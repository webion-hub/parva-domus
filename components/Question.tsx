import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { ReactNode } from "react";

interface QuestionProps {
  readonly title: string;
  readonly description: string | ReactNode;
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
        <Typography 
          color="text.secondary"
          component="span"  
        >
          {props.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
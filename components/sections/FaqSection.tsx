import { ExpandMoreRounded } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Paper, Stack, Typography } from "@mui/material";
import { NextImg } from "../NextImg";
import { Question } from "../Question";
import { BaseSectionProps, Section } from "../Section";

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
            src="/assets/images/faq.jpg"
            alt="who-we-are"
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
          <Typography 
            variant="h3" 
            color="text.primary"
            textAlign="center"
            sx={{
              marginBottom: 8
            }}
          >
            Faq
          </Typography>
          <Stack
            direction="column"
            spacing={2}
          >
            <Question 
              defaultExpanded
              title="Viverra leo vitae, volutpat libero."
              description="Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget."
            />
            <Question 
              title="Viverra leo vitae, volutpat libero."
              description="Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget."
            />
            <Question 
              title="Viverra leo vitae, volutpat libero."
              description="Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget."
            />
            <Question
              title="Viverra leo vitae, volutpat libero."
              description="Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget."
            />
          </Stack>
        </Stack>
      </Stack>
    </Section>
  )
}

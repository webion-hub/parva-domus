import { Box, Paper, Stack, Typography } from "@mui/material";
import { ReactNode, useRef, useState } from "react";

interface ServiceCardProps {
  readonly in: boolean;
  readonly delay: number;
  readonly title: string;
  readonly description: string | ReactNode;
}

export function ServiceCard(props: ServiceCardProps) {
  return (
    <Paper
      sx={{
        padding: 4,
        minHeight: 260,
        transitionProperty: 'opacity, transform',
        transitionDuration: '500ms',
        transitionDelay: `${props.delay}ms`,
        transform: props.in ? 'scale(1)' : 'scale(0)', 
        opacity: props.in ? 1 : 0, 
      }}
    >
      <Stack
        direction="column"
        spacing={2}
      > 
        <Typography 
          variant="h6" 
          color="text.primary"
        >
          {props.title}
        </Typography>
        <Typography 
          color="text.secondary"
        >
          {props.description}
        </Typography>
      </Stack>
    </Paper>
  )
}
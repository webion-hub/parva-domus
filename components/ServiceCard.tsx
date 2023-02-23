import { Box, Paper, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";

interface ServiceCardProps {
  readonly title: string;
  readonly description: string;
}

export function ServiceCard(props: ServiceCardProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: any) => {
    if(!cardRef.current)
    return

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.x) / rect.width;
    const y = (e.clientY - rect.y) / rect.height;

    const tiltRange = 10

    setPos({ 
      x: x * tiltRange * 2 - tiltRange, 
      y: y * tiltRange * 2 - tiltRange
    });
  }

  return (
    <Box
      ref={cardRef}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      onMouseMove={handleMouseMove}
    >
      <Paper
        sx={{
          padding: 4,
          minHeight: 200,
          transform: `rotateY(${pos.x}deg) rotateX(${-pos.y}deg)`
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
    </Box>
  )
}
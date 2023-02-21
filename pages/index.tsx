import { Section } from "@/components/Section";
import { ContactUsSection } from "@/components/sections/ContactUsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ServicesSection } from "@/components/sections/ServiceSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { Box, Stack, styled } from "@mui/material";

const Video = styled('video')({})

export default function Home() {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          "& > *": {
            width: '100%',
          }
        }}
      >

      </Stack>
      <WhoWeAreSection id="who-we-are"/>
      <ServicesSection id="services"/>
      <FaqSection id="faq"/>
      <ContactUsSection id="contact-us"/>
    </>
  )
}



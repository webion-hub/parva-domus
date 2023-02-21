import { Section } from "@/components/Section";
import { ContactUsSection } from "@/components/sections/ContactUsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ServicesSection } from "@/components/sections/ServiceSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Section>
        <Stack
          direction="row"
          sx={{
            "& > *": {
              width: '100%',
              height: '80vh',
              minHeight: 500 
            }
          }}
        >
          <Stack>

          </Stack>
        </Stack>
      </Section>
      <WhoWeAreSection id="who-we-are"/>
      <ServicesSection id="services"/>
      <FaqSection id="faq"/>
      <ContactUsSection id="contact-us"/>
    </>
  )
}



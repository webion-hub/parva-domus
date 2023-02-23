import { Section } from "@/components/Section";
import { ContactUsSection } from "@/components/sections/ContactUsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServiceSection";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { alpha, Button, Paper, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <HeroSection id=""/>
      <WhoWeAreSection id="who-we-are"/>
      <ServicesSection id="services"/>
      <FaqSection id="faq"/>
      <ContactUsSection id="contact-us"/>
    </>
  )
}



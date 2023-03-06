import { Contact } from "@/components/ContactGroup";

export class ParvaRepository {
  static PIVA = '11696210969';
  static address = "Via Emilia Bis 18, San Donato Milanese MI 20097"
  static email = "info@parvadomussdm.it"
  static PEC = "parvadomussdm@pec.it"
  static phone: Contact[] = [
    {
      label: "380 1866959",
      href: `tel: 3801866959`
    },
    {
      label: "024 9672980",
      href: `tel: 0249672980`
    },
  ]

  static addressLink = "https://goo.gl/maps/a72dpQTM2RSDm8no9"
  static facebookLink = "https://www.facebook.com/Parvadomusconsulenzeegestioneimmobili"
  static instagramLink = "https://www.instagram.com/parvadomus_sandonatomilanese/?igshid=ZDdkNTZiNTM%3D"
}
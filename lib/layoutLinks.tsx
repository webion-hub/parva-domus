import QuizRounded from "@mui/icons-material/QuizRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import HomeRepairService from "@mui/icons-material/HomeRepairService";
import BusinessRounded from "@mui/icons-material/BusinessRounded";

export const links = [
  {
    label: 'Home',
    icon: <HomeRounded/>,
    href: '/#',
  },
  {
    label: 'Chi siamo',
    icon: <BusinessRounded/>,
    href: '/#who-we-are',
  },
  {
    label: 'Servizi',
    icon: <HomeRepairService/>,
    href: '/#services',
  },
  {
    label: 'FAQ',
    icon: <QuizRounded/>,
    href: '/#faq',
  }
]
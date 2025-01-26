import CardStack from "@/components/ui/CardsStack";
import { FilmIcon, HandshakeIcon, LightbulbIcon, LucideLayoutDashboard, Paintbrush } from "lucide-react";

const data = [
  {
    title: "Creative Vision",
    logo: <Paintbrush size={32} />,
    description:
      "Bringing ideas to life through visually compelling designs that captivate audiences and leave a lasting impression.",
    bg: "#F2CB72",
  },
  {
    title: "Design Expertise",
    logo: <LucideLayoutDashboard size={32} />,
    description:
      "From branding to print collateral and CGI ads, every project is crafted with precision, ensuring a unique and professional touch.",
    bg: "#74CEA7",
  },
  {
    title: "Motion & 3D Mastery",
    logo: <FilmIcon size={32} />,
    description:
      "Creating stunning motion graphics, 3D animations, and CGI ads that enhance storytelling and elevate visual engagement.",
    bg: "#EA6890",
  },
  {
    title: "Innovation-Driven Approach",
    logo: <LightbulbIcon size={32} />,
    description:
      "Constantly pushing creative boundaries with fresh ideas and advanced techniques to deliver high-impact, next-level designs.",
    bg: "#6A5ACD",
  },
  {
    title: "Collaborations & Recognition",
    logo: <HandshakeIcon size={32} />,
    description:
      "Trusted by brands and recognized for outstanding creative work, consistently delivering designs that stand out in the industry.",
    bg: "#FF7F50",
  },
];

const CardStackSection: React.FC = () => {
  return (
    <CardStack>
      {data.map((item, index) => (
        <CardStack.Card
          key={index}
          index={index}
          icon={item.logo} // Update with actual path
          logoAlt={item.title}
          title={item.title}
          description={item.description}
          background={item.bg}
        />
      ))}
    </CardStack>
  );
};

export default CardStackSection;

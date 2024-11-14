import Collapse from "./Collapse";
import "../styles/Collapse.css";

export default function MenuAbout() {
  return (
    <div className="menu-about">
      <Collapse
        title="Fiabilité"
        content="La fiabilité est au cœur de nos préoccupations. Nous assurons un suivi complet et continu de nos services."
      />
      <Collapse
        title="Respect"
        content="Le respect est une valeur fondamentale. Nous respectons nos engagements envers nos clients."
      />
      <Collapse
        title="Service"
        content="Nos services sont conçus pour offrir une satisfaction maximale et répondre aux attentes de nos clients."
      />
      <Collapse
        title="Sécurité"
        content="La sécurité est primordiale pour nous. Toutes les mesures sont prises pour garantir votre sécurité."
      />
    </div>
  );
}

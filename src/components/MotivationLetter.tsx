import "../styles/MotivationLetter.scss";

export default function MotivationLetter() {
  return (
    <div className="motivation-letter">
      <h1>Martin Matějovský</h1>

      <h2>Frontendový vývojář</h2>

      <p>
        Dobrý den do Bohemia Interactive. Poslední léta jsem se živil jako
        vývojář webových stránek (čistě frontend), a nyní hledám nové pracovní
        vytížení. Mám velkou zálibu ve hrách a když mi moje partnerka řekla, že
        kousek od jejího bydliště sídlí "nějaké herní studio nebo co", tak mi
        zvědavost nedala.
      </p>
      <p>
        Vidím na Vašich stránkách volnou pozici backend developera, a to bohužel
        není moje parketa (i když JavaScript a TypeScript používám a nemám
        problém se rozvíjet na backend vývojáře). Rád bych se Vám i tak uvedl ve
        známost, mým malým koníčkem je totiž tvorba her, a třeba právě tento
        aspekt - nápady, kreativitu a hlavně zápal - bych mohl do Vaší party
        přinést a cítit naplnění, že konečně je moje hobby mou prací. Projekty
        jako Ylands by nejvíce ladily s mou krevní skupinou. Hádám, že lidí,
        kteří by chtěli vytvářet nápady pro hry, se vám hlásí hromada, takže
        snad by moje technické znalosti z vývoje webů byly pro Bohemia
        Interactive přínosnější, a třeba se budu moct přidávat do kvasu myšlenek
        a chodbových smalltalků a tam svou nápaditost ventilovat (upřímnou
        soustrast). Baví mě vymýšlet zápletky, mikro scénky, mini úkoly, úkolové
        principy.
      </p>
      <p>
        Budu nadšený, pokud se rozhodnete mě kontaktovat a zjistíme, v čem bych
        Vám se svým potenciálem mohl nejvíce pomoci. Online, osobně... ideálně
        mimo ten les, kde je Someday You’ll Return, prosím.
      </p>

      <p>S úctou, Martin Matějovský</p>

      <figure className="motivation-image">
        <img src="/img/DL-III-ante-infocentrum.png" alt="Dobývání Lokte III" />
        <figcaption>Momentka z mé hry Dobývání Lokte III</figcaption>
      </figure>
    </div>
  );
}

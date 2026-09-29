/* eslint-disable @next/next/no-img-element */
import { Reveal, Stagger, StaggerItem } from "./motion";
import { Container, Eyebrow } from "./ui";

const clients = [
  [
    "Image4",
    "h-[64px] w-[110px]",
    "top-[-36.58%] left-[0.7%] h-[171.12%] w-[99.56%]",
  ],
  ["Image5", "h-[64px] w-[108px]", "top-[-32.22%] left-0 h-[166.67%] w-full"],
  ["Image6", "h-[77px] w-[129px]", "top-[-32.22%] left-0 h-[166.67%] w-full"],
  ["Image7", "h-[75px] w-[117px]", "top-[-28.05%] left-0 h-[155.83%] w-full"],
  ["Image8", "h-[75px] w-[126px]", "top-[-30%] left-0 h-[166.67%] w-full"],
  ["Image10", "h-[71px] w-[117px]", "top-[-30%] left-0 h-[166.67%] w-full"],
];

const partners = [
  ["Image11", "h-[35px] w-[116px]", "top-[-118.42%] left-0 h-[328.95%] w-full"],
  ["Image12", "h-[41px] w-[118px]", "top-[-94.25%] left-0 h-[287.36%] w-full"],
  [
    "Image13",
    "h-[39.846px] w-[118.881px]",
    "top-[-109.88%] left-0 h-[209.88%] w-full",
  ],
];

function Row({
  eyebrow,
  text,
  children,
  className = "",
}: {
  eyebrow: string;
  text: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal
      className={`grid grid-cols-[280px_1fr] items-center gap-12 border-t border-line pt-10 ${className}`}
    >
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <p className="w-[280px] pt-[10px] text-[15px] text-slate">{text}</p>
      </div>
      <Stagger
        stagger={0.07}
        delay={0.15}
        className="grid h-[88px] grid-cols-6 gap-3"
      >
        {children}
      </Stagger>
    </Reveal>
  );
}

export function Clients() {
  return (
    <section id="clientes" className="px-6 py-[140px]">
      <Container>
        <Row eyebrow="(CLIENTES)" text="Empresas que confiam na Real Forte.">
          {clients.map(([n, box, img]) => (
            <StaggerItem
              key={n}
              className="grid place-items-center border border-dashed border-mist"
            >
              <div className={`relative overflow-hidden ${box}`}>
                <img
                  src={`/images/${n}.png`}
                  alt=""
                  className={`absolute max-w-none ${img}`}
                />
              </div>
            </StaggerItem>
          ))}
        </Row>
        <Row
          className="mt-10"
          eyebrow="(INSTITUIÇÕES PARCEIRAS)"
          text="Atuamos em rede, privilegiando a interdisciplinaridade."
        >
          {partners.map(([n, box, img]) => (
            <StaggerItem key={n} className="grid place-items-center bg-fog">
              <div className={`relative overflow-hidden ${box}`}>
                <img
                  src={`/images/${n}.png`}
                  alt=""
                  className={`absolute max-w-none ${img}`}
                />
              </div>
            </StaggerItem>
          ))}
          <StaggerItem className="grid place-items-center bg-fog">
            <div className="relative h-[59.225px] w-[112.01px]">
              <img
                src="/images/Image14.png"
                alt=""
                className="absolute size-full object-cover"
              />
            </div>
          </StaggerItem>
          {[0, 1].map((i) => (
            <StaggerItem key={i} className="grid place-items-center bg-fog">
              <span className="font-mono text-[10px] font-medium text-muted">
                LOGO
              </span>
            </StaggerItem>
          ))}
        </Row>
      </Container>
    </section>
  );
}

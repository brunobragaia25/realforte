import { Reveal, SplitWords } from "./motion";
import { Container, Eyebrow } from "./ui";

const info = [
  ["EMAIL", "contato@realforteconsultoria.com.br"],
  ["TELEFONES", "(27) 3227-3711 – 99977-2126"],
  [
    "ENDEREÇO",
    "Rua José Farias | 160 | Sala 103 | Santa Luíza | Vitória | ES | CEP: 29.045-300",
  ],
];

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  "Rua José Farias, 160, Santa Luíza, Vitória, ES, 29045-300",
)}&z=16&output=embed`;

const field =
  "w-full border-b border-mist bg-transparent pb-[14px] text-[14px] text-ink outline-none placeholder:text-muted focus:border-ink";

export function Contact() {
  return (
    <section id="contato" className="px-6 py-[140px]">
      <Container className="grid grid-cols-2 gap-24">
        <div>
          <Reveal>
            <Eyebrow>(CONTATO)</Eyebrow>
          </Reveal>
          <SplitWords
            as="h2"
            stagger={0.08}
            className="block w-[497px] pt-4 text-[52px] leading-[54.6px] tracking-[-1.56px]"
            parts={[
              { text: "Vamos conversar sobre " },
              { text: "a sua empresa.", className: "font-medium text-coral" },
            ]}
          />
          <Reveal delay={0.2} className="flex flex-col gap-6 pt-12">
            {info.map(([label, value]) => (
              <div key={label}>
                <p className="text-[12px] tracking-[1.2px] text-muted">
                  {label}
                </p>
                <p className="pt-[6px] text-[16px] leading-[24px]">{value}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.3}>
            <iframe
              title="Mapa da localização da Real Forte Consultoria"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="mt-8 h-[200px] w-full border-0"
            />
          </Reveal>
        </div>

        <Reveal delay={0.15} className="pt-10">
          <form className="flex flex-col gap-7">
            <div className="grid grid-cols-2 gap-7">
              <input className={field} placeholder="Nome" aria-label="Nome" />
              <input
                className={field}
                type="email"
                placeholder="Email"
                aria-label="Email"
              />
              <input
                className={field}
                type="tel"
                placeholder="Telefone"
                aria-label="Telefone"
              />
              <input
                className={field}
                placeholder="Assunto"
                aria-label="Assunto"
              />
            </div>
            <textarea
              className={`${field} h-[140px] resize-none`}
              placeholder="Mensagem"
              aria-label="Mensagem"
            />
            <label className="group flex cursor-pointer items-center gap-[10px] text-[14px] text-slate">
              <input type="checkbox" className="peer sr-only" />
              <span
                aria-hidden
                className="grid size-[18px] shrink-0 place-items-center border border-mist bg-white text-transparent transition-colors duration-200 group-hover:border-coral peer-checked:border-coral peer-checked:bg-coral peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-coral"
              >
                <svg
                  viewBox="0 0 12 12"
                  className="size-[10px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 6.5l2.5 2.5L10 3.5" />
                </svg>
              </span>
              Aceito receber comunicados da Real Forte Consultoria
            </label>
            <button
              type="submit"
              className="self-start rounded-full bg-coral px-7 py-4 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-navy"
            >
              Enviar mensagem ↗
            </button>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

import {
  ChalkboardTeacher,
  ChartLineUp,
  ClipboardText,
  Coins,
  Scales,
  Stethoscope,
  Storefront,
  Target,
  TreeStructure,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { services } from "@/lib/services";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { Container, Eyebrow } from "./ui";

const icons = [
  Stethoscope,
  Target,
  ChartLineUp,
  Storefront,
  TreeStructure,
  Scales,
  Coins,
  ClipboardText,
  UsersThree,
  ChalkboardTeacher,
];

export function Services() {
  return (
    <section id="servicos" className="px-6 pt-10 pb-[140px]">
      <Container>
        <Reveal className="flex h-[127px] items-end justify-between pt-10">
          <div>
            <Eyebrow>(O QUE FAZEMOS)</Eyebrow>
            <h2 className="pt-4 text-[52px] leading-[54.6px] tracking-[-1.56px]">
              Serviços
            </h2>
          </div>
          <a
            href="#"
            className="rounded-full border border-mist px-6 py-[14px] text-[14px] transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-white"
          >
            Ver todos os serviços ↗
          </a>
        </Reveal>

        <Stagger
          stagger={0.06}
          className="mt-12 grid grid-cols-5 border-t border-l border-line"
        >
          {services.map(([title, text], i) => {
            const Icon = icons[i];
            return (
              <StaggerItem
                as="article"
                key={title}
                className="group flex min-h-[300px] flex-col justify-between border-r border-b border-line bg-white p-6 transition-colors duration-200 hover:bg-blush"
              >
                <div className="flex items-start justify-between">
                  <div className="grid size-12 place-items-center border border-line">
                    <Icon
                      size={24}
                      weight="light"
                      className="text-ink transition-colors duration-200 group-hover:text-coral"
                    />
                  </div>
                  <span className="font-mono text-[12px] font-medium text-coral">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                </div>
                <div>
                  <h3 className="max-w-[208px] text-[19px] leading-[22.8px] font-medium">
                    {title}
                  </h3>
                  <p className="w-[208px] pt-3 text-[14px] leading-[21px] opacity-70">
                    {text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}

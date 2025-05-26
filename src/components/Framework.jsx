import { OrbitingCircles } from "./OrbitingCircles";

export function Framework() {
  const skills = [
    "css3",
    "github",
    "html5",
    "javascript",
    "react",
    "mysql",
    "tailwind",
    "wordpress",
    "bootstrap",
    "php",
    "laravel",
    "Livewire",
    "jquery",
  ];
  return (
    <div className="relative h-[30rem] flex sm:h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`logos/${skill}.png`} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

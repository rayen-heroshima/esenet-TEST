import { Calendar, MessageSquare } from "lucide-react";
import { Boxes } from "./ui/background-boxes";

interface StatBubbleProps {
  count: string;
  label: string;
  className: string;
}

const StatBubble = ({ count, label, className }: StatBubbleProps) => (
  <div
    className={`rounded-full flex flex-col items-center justify-center ${className}`}
  >
    <span className="text-4xl font-bold text-white">{count}</span>
    <span className="text-base text-white">{label}</span>
  </div>
);

export default function ESENetBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-[#002b56] flex flex-col items-center justify-center rounded-lg py-20">
      {/* Layered Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: "#002b56",
          opacity: 0.8, // Directly set opacity for Safari consistency
        }}
      />
      <Boxes /> {/* Background boxes */}
      
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <div
          className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12"
          style={{
            rowGap: "3rem", // Safari fallback for `gap`
            columnGap: "3rem",
          }}
        >
          {/* Left Content Section */}
          <div className="flex flex-col flex-1">
            <span className="text-blue-200 mb-2 text-sm font-semibold">
              POURQUOI REJOINDRE ESENET
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">
              Rejoignez
              <br />
              ESENet Job Fair
            </h1>
            <p className="text-blue-400 text-lg mb-8">
              Découvrez de nouvelles opportunités de carrière et connectez-vous
              avec des leaders de l&apos;industrie.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start space-x-4">
                <Calendar
                  className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1"
                  focusable="false" // Prevent Safari accessibility issues
                />
                <p className="text-sm text-white">
                  Connectez-vous avec des entreprises de premier plan au cœur de
                  l&apos;innovation en Tunisie.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <MessageSquare
                  className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1"
                  focusable="false"
                />
                <p className="text-sm text-white">
                  Participez à des sessions perspicaces et obtenez des
                  informations précieuses pour votre carrière.
                </p>
              </div>
            </div>
          </div>

          {/* Right Stats Section */}
          <div
            className="flex flex-wrap justify-center items-center gap-6"
            style={{
              rowGap: "1.5rem", // Fallback for `gap` in Safari
              columnGap: "1.5rem",
            }}
          >
            <StatBubble
              count="30+"
              label="Partenaires"
              className="w-36 h-36 bg-blue-600"
            />
            <StatBubble
              count="20+"
              label="Intervenants"
              className="w-44 h-44 bg-blue-500"
            />
            <StatBubble
              count="500+"
              label="Participants"
              className="w-32 h-32 bg-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

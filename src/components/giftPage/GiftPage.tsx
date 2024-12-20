import { Gift, Heart, Smile } from "lucide-react";

interface BalloonProps {
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  size: any;
  delay: number;
  duration: number;
}

const PartyBalloon = ({ color, delay, duration, size }: BalloonProps) => (
  <div
    className="absolute animate-float"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      width: size,
      height: size * 1.2,
    }}
  >
    <svg viewBox="0 0 100 120" className="w-full h-full">
      {/* Barbante da bexiga */}
      <path
        d="M50 120 Q45 100 50 80 T50 60"
        fill="none"
        stroke="#666"
        strokeWidth="2"
        className="animate-sway"
      />

      {/* Corpo da bexiga */}
      <path d="M25 60 C25 30 75 30 75 60 C75 85 25 85 25 60" fill={color} />

      {/* Brilho da bexiga */}
      <ellipse
        cx="35"
        cy="45"
        rx="8"
        ry="12"
        fill="white"
        fillOpacity="0.3"
        transform="rotate(-30 35 45)"
      />

      {/* Nó da bexiga */}
      <circle cx="50" cy="80" r="5" fill={color} />
    </svg>
  </div>
);

const BalloonContainer: React.FC = () => {
  const balloons: Omit<BalloonProps, "delay" | "duration">[] = [
    { color: "#FF69B4", size: 64 }, // Pink
    { color: "#FF1493", size: 48 }, // Deep Pink
    { color: "#FF69B4", size: 80 }, // Pink
    { color: "#DB7093", size: 56 }, // Pale Violet Red
    { color: "#FFB6C1", size: 40 }, // Light Pink
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {balloons.map((balloon, index) => (
        <PartyBalloon
          key={index}
          {...balloon}
          delay={index * 2}
          duration={15 + Math.random() * 10}
        />
      ))}
    </div>
  );
};

export default function GiftPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-rose-300 flex items-center justify-center p-4">
      <BalloonContainer />
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in">
        {/* Cabeçalho */}
        <div className="bg-rose-500 text-white p-6 text-center">
          <Gift className="mx-auto mb-4" size={64} />
          <h1 className="text-3xl font-bold">Feliz Aniversário, Amor! 🎉</h1>
        </div>

        {/* Conteúdo Principal */}
        <div className="p-6 space-y-6">
          {/* Revelação do Presente */}
          <div className="bg-rose-50 rounded-xl p-4 text-center">
            <h2 className="text-2xl font-semibold text-rose-700 mb-4">
              Seu Presente Especial
            </h2>
            <p className="text-rose-600 text-lg">
              ASSINATURA ANUAL <strong>CREW APP</strong>! 💕
            </p>
          </div>

          {/* Detalhes do Presente */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-rose-100 p-4 rounded-xl">
              <Smile className="text-rose-600" size={32} />
              <div>
                <h3 className="font-semibold text-rose-800">
                  Vamos começar a vida malhadora
                </h3>
                <a
                  href="https://www.vempracreww.com.br/crewapp-pv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:text-rose-800 underline transition-colors"
                >
                  Clique aqui para mais detalhes
                </a>
              </div>
            </div>
          </div>

          {/* Mensagem Pessoal */}
          <div className="bg-rose-50 p-4 rounded-xl text-center">
            <Heart className="mx-auto mb-4 text-rose-500" size={40} />
            <p className="text-rose-700 italic">
              Cada momento ao seu lado é um presente. Feliz aniversário, meu
              amor!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  href?: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  const CardContent = (
    <>
      <div className="relative flex justify-center mb-6">
        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
        <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 border border-green-50">
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="object-contain group-hover:-translate-y-1 transition-transform duration-500"
          />
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
        {title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        {description}
      </p>

      {/* "Explore Service" button for clarity on all devices */}
      <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-xs uppercase tracking-widest mt-auto group-hover:gap-3 transition-all duration-300">
        <span>Explore Service</span>
        <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </div>
      </div>
    </>
  );

  const baseClasses = "relative h-full flex flex-col bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl px-8 py-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(22,163,74,0.2)] hover:bg-white/90 transition-all duration-500 group overflow-hidden cursor-pointer";

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col h-full">{CardContent}</div>
      </Link>
    );
  }

  return (
    <div className={baseClasses}>
      <div className="relative z-10 flex flex-col h-full">{CardContent}</div>
    </div>
  );
}

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
      <div className="flex justify-center mb-6">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>

      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="bg-[#eaf6ea] rounded-xl px-6 py-10 text-center shadow-sm hover:shadow-md hover:bg-[#e0f0e0] transition-all duration-300 group"
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <div className="bg-[#eaf6ea] rounded-xl px-6 py-10 text-center shadow-sm">
      {CardContent}
    </div>
  );
}

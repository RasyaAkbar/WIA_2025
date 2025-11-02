type Props = {
  latitude: number;
  longitude: number;
  name: string;
};

export default function MapEmbed({ latitude, longitude, name }: Props) {
  const q = encodeURIComponent(`${latitude},${longitude} (${name})`);
  const src = `https://www.google.com/maps?q=${q}&output=embed&z=16`;
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#e2e8f0] dark:border-[#2d3748] bg-[#f1f5f9] dark:bg-[#1e3a5f] shadow-md">
      <iframe
        src={src}
        title={`Lokasi ${name}`}
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
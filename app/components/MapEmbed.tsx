type Props = {
  latitude: number;
  longitude: number;
  name: string;
};

export default function MapEmbed({ latitude, longitude, name }: Props) {
  const q = encodeURIComponent(`${latitude},${longitude} (${name})`);
  const src = `https://www.google.com/maps?q=${q}&output=embed&z=16`;
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5">
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



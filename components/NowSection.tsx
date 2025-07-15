import { useEffect, useState } from 'react';

// Sample public JSON URL (replace with your own later)
const NOW_URL = 'https://gist.githubusercontent.com/benborgers/6c1e2e2e2e2e2e2e2e2e2e2e2e2e2e2e/raw/now.json';

export default function NowSection() {
  const [now, setNow] = useState<{ title: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(NOW_URL)
      .then((res) => res.json())
      .then((data) => {
        setNow(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-8">Loading current status...</div>;
  if (!now) return <div className="text-center py-8 text-red-500">Could not load current status.</div>;

  return (
    <section className="section-padding">
      <h2 className="text-3xl font-bold gradient-text mb-4">{now.title}</h2>
      <p className="text-lg text-gray-700">{now.content}</p>
    </section>
  );
} 
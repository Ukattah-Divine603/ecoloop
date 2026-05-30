import { useEffect, useState } from "react";

export default function CountUp({ end = 0, duration = 2 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setValue(Math.floor(start));
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{value.toLocaleString()}</span>;
}

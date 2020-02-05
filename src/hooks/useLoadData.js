import { useState, useEffect } from "react";

const useLoadData = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.warn(err);
      });
  }, []);

  return [loading, data];
};

export { useLoadData };

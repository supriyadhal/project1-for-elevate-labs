
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartSection({ repos }) {
  if (!repos.length) return null;

  const languages = {};
  repos.forEach((r) => {
    const lang = r.language || "Other";
    languages[lang] = (languages[lang] || 0) + 1;
  });

  const data = {
    labels: Object.keys(languages),
    datasets: [
      {
        label: "Repositories per language",
        data: Object.values(languages),
        backgroundColor: "rgba(37, 99, 235, 0.6)",
      },
    ],
  };

  return (
    <div className="mt-10 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        📊 Language Distribution
      </h2>
      <Bar data={data} />
    </div>
  );
}
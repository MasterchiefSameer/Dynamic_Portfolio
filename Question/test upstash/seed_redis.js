const url = "https://cunning-kitten-286309.upstash.io";
const token = "gQAAAAAABF5lAAIgcDE5ZmM4YmZmYmE0N2I0N2FhYjg3ZGYwZTQ4NzU5ODRiNw";

async function seedInitial() {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(["HMSET", "portfolio:views", "total", "232", "unique", "122"]),
    });
    console.log("Seeded Redis:", await res.json());
  } catch (err) {
    console.error("Error:", err);
  }
}

seedInitial();

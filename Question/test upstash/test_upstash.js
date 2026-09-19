const url = "https://cunning-kitten-286309.upstash.io";
const token = "gQAAAAAABF5lAAIgcDE5ZmM4YmZmYmE0N2I0N2FhYjg3ZGYwZTQ4NzU5ODRiNw";

async function testIncrement() {
  try {
    // 1. Pipeline increment
    const pipelineRes = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["HINCRBY", "portfolio:views", "total", "1"],
        ["HINCRBY", "portfolio:views", "unique", "1"],
      ]),
    });
    console.log("Pipeline result:", await pipelineRes.json());

    // 2. Fetch updated
    const getRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(["HMGET", "portfolio:views", "total", "unique"]),
    });
    console.log("Updated counts in Redis:", await getRes.json());
  } catch (err) {
    console.error("Error:", err);
  }
}

testIncrement();

import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

// ここで Repository / UseCase / Controller を組み立てて router を登録する

const PORT = process.env["PORT"] ?? 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

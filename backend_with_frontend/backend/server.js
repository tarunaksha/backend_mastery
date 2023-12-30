import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/lines", (req, res) => {
    const motivationalLines =[
        {
          "id": 1,
          "title": "Believe in Yourself",
          "description": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."
        },
        {
          "id": 2,
          "title": "Overcome Limits",
          "description": "Your only limit is your mind. If you believe it can be done, then it will be done."
        },
        {
          "id": 3,
          "title": "Courage in Adversity",
          "description": "Success is not final, failure is not fatal: It is the courage to continue that counts."
        },
        {
          "id": 4,
          "title": "Keep Going",
          "description": "Don't watch the clock; do what it does. Keep going."
        },
        {
          "id": 5,
          "title": "Love Your Work",
          "description": "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
        }
      ]
    res.send(motivationalLines);
    });
app.listen(port, () => console.log(`Server running on port ${port}`));
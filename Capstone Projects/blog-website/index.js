import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  fetch('https://api.npoint.io/c790b4d5cab58020d391')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Work with the JSON data here
    // Assuming `posts` variable holds the fetched data
    res.render("index.ejs", { data: data });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    // Handle error response here, if needed
    res.status(500).send('Internal Server Error');
  });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/post", (req, res) => {
  res.render("post.ejs", {posts: data});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

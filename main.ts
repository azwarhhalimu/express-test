import Express from "express";

Express()
  .get("/", (req, res) => {
    res.send("halo");
  })
  .get("/halaman2", (req, res) => {
    res.json({
      status: "mantap",
    });
  })
  .listen(2000, () => {
    console.log("aplikasi sedang bejralan");
  });

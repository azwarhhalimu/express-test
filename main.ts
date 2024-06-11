import Express, { type Request, type Response } from "express";

Express()
  .get("/", (req: Request, res: Response) => {
    res.send("halo");
  })
  .get("/halaman2", (req: Request, res: Response) => {
    res.json({
      status: "mantap",
    });
  })
  .get("/halaman3", (req: Request, res: Response) => {
    res.send({
      status: "halaman 3",
    });
  })
  .listen(2000, () => {
    console.log("aplikasi sedang bejralan");
  });

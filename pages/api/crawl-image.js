import Meta from "html-metadata-parser";

export default async function crawlImage(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;
    const tags = await Meta.parser(url);
    const imageUrl = tags.og.image;
    if (imageUrl) {
      res.status(200).json({ success: true, imageUrl });
      return;
    }
    res.status(400).json({ success: false });
  }
}

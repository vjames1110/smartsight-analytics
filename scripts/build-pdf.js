/* Renders the print view (/?print=1) of the production build into a PDF.
 *
 *   npm run pdf
 *
 * Needs a local Chrome/Edge. Set CHROME_PATH if it is not auto-detected.
 * Output: public/downloads/SmartSight-Portfolio.pdf (committed, so it ships
 * with every deploy) and build/downloads/ so the current build is ready too.
 */
const fs = require("fs");
const http = require("http");
const path = require("path");
const puppeteer = require("puppeteer-core");

const root = path.resolve(__dirname, "..");
const buildDir = path.join(root, "build");
const outName = "SmartSight-Portfolio.pdf";

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
  ].filter(Boolean);
  return candidates.find((p) => fs.existsSync(p));
}

function serveBuild() {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    let file = path.join(buildDir, urlPath);
    if (!file.startsWith(buildDir) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      file = path.join(buildDir, "index.html");
    }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(file)] || "application/octet-stream",
    });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) =>
    server.listen(0, () => resolve(server))
  );
}

async function main() {
  if (!fs.existsSync(path.join(buildDir, "index.html"))) {
    throw new Error("No build found. Run `npm run build` first (or use `npm run pdf`).");
  }
  const executablePath = findChrome();
  if (!executablePath) {
    throw new Error("Chrome/Edge not found. Set the CHROME_PATH environment variable.");
  }

  const server = await serveBuild();
  const { port } = server.address();
  const browser = await puppeteer.launch({ executablePath, headless: true });

  try {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}/?print=1`, {
      waitUntil: "networkidle0",
    });
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMediaType("print");
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });

    for (const dir of [
      path.join(root, "public", "downloads"),
      path.join(buildDir, "downloads"),
    ]) {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, outName), pdf);
    }
    console.log(`PDF written: public/downloads/${outName} (${Math.round(pdf.length / 1024)} KB)`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});

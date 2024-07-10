import fs from "node:fs";

fs.rename("dist/assets/node_modules", "dist/assets/modules", (err) => {
  console.log("Renamed node_modules to modules", err);
});

// iterate through all files in dist
const files = fs.readdirSync("dist/");

while (files.length > 0) {
  const file = files.shift();
  const path = `dist/${file}`;

  const stats = fs.statSync(path);
  if (stats.isDirectory()) {
    files.push(...fs.readdirSync(path).map((f) => `${file}/${f}`));
  } else {
    // if file is text file
    if (
      file.endsWith(".js") ||
      file.endsWith(".html") ||
      file.endsWith(".css")
    ) {
      const data = fs.readFileSync(path, "utf8");
      const result = data.replace(/node_modules/g, "modules");
      fs.writeFileSync(path, result, "utf8");
    }
  }
}

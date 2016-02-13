function home(res) {
  console.log("You're inside HOME");
  res.writeHead(200, { "Content-Type":"text/html" });
  res.write("This is the homepage");
  res.end();
}

function page1(res) {
  console.log("You're inside PAGE 1");
  res.writeHead(200, { "Content-Type":"text/html" });
  res.write("This is the PAGE 1");
  res.end();
}

function page2(res) {
  console.log("You're inside PAGE 2");
  res.writeHead(200, { "Content-Type":"text/html" });
  res.write("This is the PAGE 2");
  res.end();
}

function favicon(res) {
  console.log("Favicon requested...");
  res.writeHead(200, { "Content-Type":"text/html" });
  res.write("");
  res.end();
}

exports.home = home;
exports.page1 = page1;
exports.page2 = page2;
exports.favicon = favicon;

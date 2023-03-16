const fs = require("fs");
const path = require("path");

function createFolder(blogPath) {

  // console.log("blogPath: ", blogPath);
  try {
    if (!fs.existsSync(blogPath)) {
      fs.mkdirSync(blogPath);
      return { "status": "ok", "message": "New post folder created." }
    }
    else {
      return { "status": "error", "message": "Folder already exists." }
    }
  } catch (err) {
    return { "status": "error", "message": err };
  }
}

function createIndexMD(blogPath, postTitle) {
  const mdDefaultContent = `---
layout: layouts/blog.njk
---
# ${postTitle}
`;
  const fullPath = path.normalize(path.join(blogPath, "index.md"));
  if (!fs.existsSync(fullPath)) {
    fs.writeFile(fullPath, mdDefaultContent, (error) => {
      if (error) {
        return { "status": "error", "message": error };
      }
      return { "status": "ok", "message": "New post page created." }
    });
  }
  else {
    return { "status": "error", "message": "Page already exists." }
  }
}

function createPost(postTitle) {
  console.log("postTitle: ", postTitle);

  const blogPath = path.normalize(path.join(__dirname, "..", "..", "blog", postTitle));
  console.log("blogPath: ", blogPath);

  let feedback = [];
  feedback.push(createFolder(blogPath));
  feedback.push(createIndexMD(blogPath, postTitle));
  return feedback;
}

module.exports = createPost;
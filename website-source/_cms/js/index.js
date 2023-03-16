import slugify from '@sindresorhus/slugify';

async function createFolder() {
  // preventSubmit();
  const cmsTitle = slugify(document.querySelector("#cmsAddTitle").value);
  let response = await fetch(`/blog/${cmsTitle}/index.html?createCall=1`);
  if (!response.ok) {
    setTimeout(async () => {
      let responseAfter = await fetch(`/blog/${cmsTitle}/index.html?createCall=2`);
      // console.log("responseAfter: ", responseAfter);
      if (responseAfter.ok) {
        location.href = `/_cms/editor/index.html?title=${cmsTitle}`;
      }
    }, 500);
  }
  console.log("response: ", response);
}

document.querySelector("#cmsSubmit").addEventListener("click", createFolder);
document.querySelector("#cmsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  createFolder();
});



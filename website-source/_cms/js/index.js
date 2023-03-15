import slugify from '@sindresorhus/slugify';

function preventSubmit(event) {
  // console.log(event)
  if (event) event.preventDefault();
}

function createFolder(event) {
  preventSubmit();
  const cmsTitle = slugify(document.querySelector("#cmsAddTitle").value);
}

document.querySelector("#cmsSubmit").addEventListener("click", createFolder);
document.querySelector("#cmsForm").addEventListener("click", createFolder);



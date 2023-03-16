import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor';
import TurndownService from 'turndown';

const turndownService = new TurndownService();
const parsedUrl = new URL(window.location.href);
const title = parsedUrl.searchParams.get("title");
let ckeditor;

function startAutoSave(data) {
  console.log(turndownService.turndown(data));
}

async function getMarkdown() {
  let response = await fetch(`/blog/${title}/index.md`);
  if (response.ok) {
    console.log("response: ", response);
  }
}

// https://ckeditor.com/docs/ckeditor5/latest/framework/deep-dive/ui/document-editor.html
DecoupledEditor
  .create(document.querySelector('.document-editor__editable'), {
    heading: {
      options: [
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
        ,
        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' }
      ]
    }
  })
  .then(editor => {
    ckeditor = editor;
    const toolbarContainer = document.querySelector('.document-editor__toolbar');
    toolbarContainer.appendChild(editor.ui.view.toolbar.element);
    editor.model.document.on('change:data', () => {
      startAutoSave(editor.getData());
    });

    const toolbarButtons = document.querySelector(".ck-toolbar__items");
    const cmsPublish = document.querySelector("#cms-publish");
    toolbarButtons.appendChild(cmsPublish);

    cmsPublish.addEventListener("click", function (event) {
      console.log("cmsPublish: ");
    });

    getMarkdown();

  })
  .catch(error => {
    console.error(error);
  });

const titleInput = document.querySelector("#cms-meta-title");
titleInput.value = title;


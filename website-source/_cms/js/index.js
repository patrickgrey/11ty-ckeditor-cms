import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor';
import TurndownService from 'turndown';

const turndownService = new TurndownService();

function startAutoSave(data) {
  console.log(turndownService.turndown(data));
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
    })

  })
  .catch(error => {
    console.error(error);
  });

// console.log(turndownService.turndown(`<h1>Hello world!</h1>`));
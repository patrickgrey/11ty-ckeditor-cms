import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor';
import TurndownService from 'turndown';

const turndownService = new TurndownService();

function startAutoSave(data) {
  console.log(turndownService.turndown(data));
}


DecoupledEditor
  .create(document.querySelector('#ck11-editor'))
  .then(editor => {
    const toolbarContainer = document.querySelector('#ck11-editor-toolbar');
    toolbarContainer.appendChild(editor.ui.view.toolbar.element);
    editor.model.document.on('change:data', () => {
      startAutoSave(editor.getData());
    });
  })
  .catch(error => {
    console.error(error);
  });

// console.log(turndownService.turndown(`<h1>Hello world!</h1>`));
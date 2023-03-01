import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

console.log("CMS GO!")

// ckEditor

ClassicEditor
  .create(document.querySelector('#ckEditor'))
  .then(editor => {
    window.editor = editor;
  })
  .catch(error => {
    console.error('There was a problem initializing the editor.', error);
  });
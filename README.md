# 11ty-ckeditor-cms

A simple-ish CMS with WSYWIG editor but files saved to MarkDown and processed by 11ty.

structure: all pages on one level? Yes, start off with this. Each MD file in a folder with page title and index.md.

images: how to deal with this? Should be uploaded to local "images" folder then copied across to page location.

\_cms/index: list existing pages (taken from MD pages). CRUD links here for each page. Form to create new page. This writes the file and stores the metadata in front matter then opens editor with QS parameters.

\_cms/editor: Show title in input that can change. Maybe on update button. Allow to select layout template from drop down.

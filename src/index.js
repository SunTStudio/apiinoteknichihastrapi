'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // Override skema kolom caption pada tabel files (plugin upload) menjadi tipe 'text'
    const fileAttributes = strapi.plugin('upload').contentTypes.file.attributes;
    
    if (fileAttributes && fileAttributes.caption) {
      fileAttributes.caption.type = 'text';
    }
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};

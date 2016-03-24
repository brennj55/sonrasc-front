import Immutable from 'immutable';
import { keyBy } from 'lodash';

export function packageInvoiceForStorage(state) {
  let image = state.UploadInvoice.image;
  let items = state.UploadInvoice.items;
  let x = state.UploadInvoice.itemsById;
  let form = state.UploadInvoice.form;

  let itemsFromForm = form.filter((item, key) => key.includes('Item'));
  let keyedItems = itemsFromForm.map((item, key) => Object.assign({}, item, {key})).toJS();

  console.log(x);

  return {
    image,
    form: form.filter((item, key) => !key.includes('Item')),
    items: itemsFromForm
  };
};

import Immutable from 'immutable';
import { keyBy } from 'lodash';

export function packageInvoiceForStorage(state) {
  let image = state.UploadInvoice.image;
  let items = state.UploadInvoice.items;
  let form = state.UploadInvoice.form;
  let user = state.authenication.user.username;
  let businessTo = state.authenication.user.business;
  console.log(JSON.stringify(items.toJS()) +"\n\n\n" + JSON.stringify(form.toJS()));
  return {
    image,
    user, businessTo,
    form: form.toJS(),
    items: items.toJS()
  };
};

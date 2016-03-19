export function packageInvoice(state) {
  let form = state.UploadInvoice.form;
  console.log(form.toJS(), form.toArray());
}

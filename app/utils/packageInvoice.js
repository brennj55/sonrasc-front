export function packageInvoice(state) {
  let image = state.UploadInvoice.image;
  let items = state.UploadInvoice.items;
  let form = state.UploadInvoice.form;

  let itemsFromForm = form.filter((item, key) => key.includes('Item'));
  let itemsWithBoundaries = itemsFromForm.map((item, key) => {
    let indexes = key.split('/');
    let newItem = items.toArray()[parseInt(indexes[1])];
    if (item.boundary) {
      return Object.assign({}, newItem, {boundary: item.boundary});
    }
  });

  return {
    image,
    form: form.filter((item, key) => !key.includes('Item')),
    items: itemsWithBoundaries.toArray()
  };
};

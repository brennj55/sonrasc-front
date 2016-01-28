export const fieldName = (field) => capitalize(field.slice(field.lastIndexOf(".") + 1));

const capitalize = (name) => name.slice(0, 1).toUpperCase() + name.slice(1);

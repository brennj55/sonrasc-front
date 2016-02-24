export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';

/* Action creators */
export const toggleModal = () => {
  return { type: TOGGLE_MODAL };
};

export const openModal = () => {
  return { type: OPEN_MODAL };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};

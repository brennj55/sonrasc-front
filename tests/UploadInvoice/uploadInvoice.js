import { expect } from 'chai';
import { uploadInvoice as actions } from '../../app/actions';
import configureMockStore from 'redux-mock-store';
import Immutable from 'immutable';
import { items, image } from '../../app/reducers/UploadInvoice';
import croppedImage from './testCropping.js';

const mockStore = configureMockStore();

let tests = describe("Upload an Invoice", () => {

  describe('Sync actions objects are as described', () => {

    it("SELECT_IMAGE action", () => {
      const imageBlobData = require('./testInvoice.js');
      const expectedAction = {
        type: actions.SELECT_IMAGE,
        image: imageBlobData
      };
      expect(actions.selectImage(imageBlobData)).to.deep.equal(expectedAction);
    });

    it("CROP_IMAGE_AREA action", () => {
      const imageBlobData = require('./testInvoice.js');
      const boundary = require('./testCropping.js').boundary;
      const expectedAction = {
        type: actions.CROP_IMAGE_AREA,
        imageData: imageBlobData,
        boundary
      };
      expect(actions.cropImage(imageBlobData, boundary)).to.deep.equal(expectedAction);
    });

    it("REQUEST_CROPPED_DATA action", () => {
      const expectedAction = {
        type: actions.REQUEST_CROPPED_DATA
      };
      expect(actions.requestCroppedData()).to.deep.equal(expectedAction);
    });

    // it("RECIEVE_CROPPED_DATA action", () => {
    //   const date = new Date();
    //   const expectedAction = {
    //     type: actions.RECIEVE_CROPPED_DATA,
    //     cropType: "date",
    //     data: { value: date },
    //     recievedAt: Date.now()
    //   };
    //   expect(actions.recieveCroppedData('date', {value: date})).to.deep.equal(expectedAction);
    // });

    it("UPDATE_UPLOAD_FORM action", () => {
      const boundary = require('./testCropping.js').boundary;
      const expectedAction = {
        type: actions.UPDATE_UPLOAD_FORM,
        key: 'date',
        value: Date.now(),
        boundary
      };
      expect(actions.updateUploadForm('date', Date.now(), boundary)).to.deep.equal(expectedAction);
    });

    it("CLEAR_DIALOG action", () => {
      const expectedAction = {
        type: actions.CLEAR_DIALOG
      };

      expect(actions.clearDialog()).to.deep.equal(expectedAction);
    });

    it("TOGGLE_CROPPING_DIALOG action", () => {
      const expectedAction = {
        type: actions.TOGGLE_CROPPING_DIALOG,
        cropType: 'date'
      };
      expect(actions.toggleCroppingDialog('date')).to.deep.equal(expectedAction);
    });

    it("ADD_NEW_ITEM action", () => {
      const expectedAction = {
        type: actions.ADD_NEW_ITEM
      };
      expect(actions.addItem()).to.deep.equal(expectedAction);
    });

    it("UPDATE_ITEM action", () => {
      const expectedAction = {
        type: actions.UPDATE_ITEM,
        value: "Log burner",
        field: "Name",
        id: "1",
        boundary: {}
      };
      expect(actions.updateItem("Log burner", "Name", "1", {})).to.deep.equal(expectedAction);
    });

    it("REMOVE_ITEM action", () => {
      const expectedAction = {
        type: actions.REMOVE_ITEM,
        key: 1
      };
      expect(actions.removeItemByID(1)).to.deep.equal(expectedAction);
    });
  });

  // describe('Async actions', () => {
  //   it('lines up 3 actions required to fetch cropped data for a non item field.', (done) => {
  //     const getState = Immutable.List();
  //     const boundary = require('./testCropping.js').boundary;
  //     const image = require('./testInvoice.js');
  //
  //     const expectedActions = [{
  //       type: actions.UPDATE_UPLOAD_FORM,
  //       key: 'date',
  //       value: Date.now(),
  //       boundary
  //     }, {
  //       type: actions.RECIEVE_CROPPED_DATA,
  //       cropType: "date",
  //       data: { value: Date.now() },
  //       recievedAt: Date.now()
  //     }, {
  //       type: actions.CLEAR_DIALOG
  //     }];
  //
  //     const store = mockStore(getState, expectedActions, done);
  //     store.dispatch(actions.fetchCroppedData('date', image, boundary));
  //   });
  // });

  describe('Items reducer', () => {
    it("should return initial state", () => {
      expect(items(undefined, {})).to.deep.equal(Immutable.List());
    });

    it("should handle ADD_NEW_ITEM to inital state", () => {
      const expectedState = [{}];
      expect(
        items(Immutable.List(),
        { type: actions.ADD_NEW_ITEM }
      ).toArray()).to.deep.equal(expectedState);
    });

    it("should handle ADD_NEW_ITEM with a state with one empty item", () => {
      const expectedState = [{}, {}];
      expect(
        items(Immutable.List([{}]),
        { type: actions.ADD_NEW_ITEM }
      ).toArray()).to.deep.equal(expectedState);
    });

    it("should handle UPDATE_ITEM with a state with one empty item", () => {
      const action = {
        type: actions.UPDATE_ITEM,
        value: "Log Burner",
        field: "Name",
        id: 0,
        boundary: croppedImage.boundary
      };

      const initalState = Immutable.List([{}]);
      const expectedState = Immutable.List([{
        Name: {
          value: "Log Burner",
          boundary: croppedImage.boundary
        }
      }]);
      expect(items(initalState, action)).to.deep.equal(expectedState);
    });

    it("should handle UPDATE_ITEM with a state with one item with Name filled", () => {
      const action = {
        type: actions.UPDATE_ITEM,
        value: 10,
        field: "Quantity",
        id: 0,
        boundary: croppedImage.boundary
      };

      const initalState = Immutable.List([{
        Name: {
          value: "Log Burner",
          boundary: croppedImage.boundary
        }
      }]);

      const expectedState = Immutable.List([{
        Name: {
          value: "Log Burner",
          boundary: croppedImage.boundary
        },
        Quantity: {
          value: 10,
          boundary: croppedImage.boundary
        }
      }]);
      expect(items(initalState, action)).to.deep.equal(expectedState);
    })

    it("should overwrite existing value using UPDATE_ITEM", () => {
      const action = {
        type: actions.UPDATE_ITEM,
        value: 20,
        field: "Quantity",
        id: 0,
        boundary: croppedImage.boundary
      };

      const initalState = Immutable.List([{
        Name: {
          value: "Log Burner",
          boundary: croppedImage.boundary
        },
        Quantity: {
          value: 10,
          boundary: croppedImage.boundary
        }
      }]);

      const expectedState = Immutable.List([{
        Name: {
          value: "Log Burner",
          boundary: croppedImage.boundary
        },
        Quantity: {
          value: 20,
          boundary: croppedImage.boundary
        }
      }]);
      expect(items(initalState, action)).to.deep.equal(expectedState);
    })

    it("should handle REMOVE_ITEM on one item to an empty list", () => {
      const action = {
        type: actions.REMOVE_ITEM,
        key: 0
      };

      const initalState = Immutable.List([{}]);
      const expectedState = Immutable.List();

      expect(items(initalState, action)).to.deep.equal(expectedState);
    });

    it("shouldn't remove an item that doesn't exist when using REMOVE_ITEM.", () => {
      const action = {
        type: actions.REMOVE_ITEM,
        key: 10
      };

      const initalState = Immutable.List([{}, {}]);
      const expectedState = Immutable.List([{}, {}]);
      expect(items(initalState, action)).to.deep.equal(expectedState);
    });

    it("should remove the correct item when using REMOVE_ITEM", () => {
      const action = {
        type: actions.REMOVE_ITEM,
        key: 1
      };

      const initalState = Immutable.List([{
        Name: { value: "Log Burner", boundary: croppedImage.boundary},
        Quantity: {value: 10, boundary: croppedImage.boundary}
      }, {
        Name: {value: "Eggs", boundary: croppedImage.boundary},
        Quantity: {value: 10, boundary: croppedImage.boundary}
      }, {
        Name: {value: "Milk", boundary: croppedImage.boundary},
        Quantity: {value: 10, boundary: croppedImage.boundary}
      }]);

      const expectedState = Immutable.List([{
        Name: { value: "Log Burner", boundary: croppedImage.boundary},
        Quantity: {value: 10, boundary: croppedImage.boundary}
      }, {
        Name: {value: "Milk", boundary: croppedImage.boundary},
        Quantity: {value: 10, boundary: croppedImage.boundary}
      }]);

      expect(items(initalState, action)).to.deep.equal(expectedState);
    });
  });

  describe('Image reducer', () => {
    it('inital state should be an empty string', () => {
      expect(image(undefined, {})).to.equal('');
    });

    it('the image should be returned when you select the image.', () => {
      const imageBlobData = require('./testInvoice.js');
      const action = {
        type: actions.SELECT_IMAGE,
        image: imageBlobData
      };
      expect(image('', action)).to.equal(imageBlobData);
    });
  });


});

export default tests;

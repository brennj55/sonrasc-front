import { expect } from 'chai';
import * as actions from '../../app/actions';

let tests = describe("Upload an Invoice", () => {

  describe('Are actions returning what they are meant to?', () => {

    it("should be an action describing an image upload.", () => {
      const imageBlobData = require('./testInvoice.js');
      const expectedAction = {
        type: actions.SELECT_IMAGE,
        image: imageBlobData
      };
      expect(actions.selectImage(imageBlobData)).to.deep.equal(expectedAction);
    });

    it("should be an action which crops a given image and boundary coordinates", () => {
      const imageBlobData = require('./testInvoice.js');
      const boundary = require('./testCropping.js').boundary;
      const expectedAction = {
        type: actions.CROP_IMAGE_AREA,
        imageData: imageBlobData,
        boundary
      };
      expect(actions.cropImage(imageBlobData, boundary)).to.deep.equal(expectedAction);
    });

    it("should be an object requesting for the contents of cropped data.", () => {
      const expectedAction = {
        type: actions.REQUEST_CROPPED_DATA
      };
      expect(actions.requestCroppedData()).to.deep.equal(expectedAction);
    });
  });

});

export default tests;

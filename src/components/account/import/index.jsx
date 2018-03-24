import React from 'react';

import UploadBar from './uploadBar';
import uploaderHOC from './uploaderHOC';

const UploadContacts = uploaderHOC(UploadBar);


const ImportContacts = () => (
  <div
    className="card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 mb-3 text-center"
  >
    <div className="form-group row mb-0 pb-0">
      <div className="col-12">
        <h4 className="text-success text-center">Import Contacts</h4>
      </div>
    </div>
    <UploadContacts />
  </div>
);
export default ImportContacts;

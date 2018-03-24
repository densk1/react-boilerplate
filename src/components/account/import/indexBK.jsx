import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import csv from 'csv';
import axios from 'axios';

class ImportContacts extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dragEnter: false,
      // accepted: [],
      // rejected: [],
      // data:null,
      progress: 0,
      arraySize: false,
    };
  }
  componentWillUnmount = async () => {
    await this.setState({ arraySize: false });
  }
  onDrop = (e) => {
    this.setState({
      dragEnter: false,
    });
    const reader = new FileReader();
    reader.onload = () => {
      csv.parse(reader.result, (err, data) => {
        if (err) throw err;
        this.processData(data);
      });
    };
    reader.readAsBinaryString(e[0]);
  }

  processData = async (da) => {
    const contactsArray = [];
    da.forEach((d, i) => {
      const data = d.map(string => string.trim());
      if (!data[0]) {
        data[0] = data[3];
      }
      if (i === 0) { return; }
      contactsArray.push({
        firstName: data[0],
        secondName: data[1],
        email: data[2],
        organisation: data[3],
        role: data[4],
        status: data[5],
        office: data[6],
        extension: data[7],
        direct: data[8],
        mobile: data[9],
        address1: data[10],
        address2: data[11],
        city: data[12],
        postcode: data[13],
        country: data[14],
        comments: [
          data[15], data[17], data[18], data[19], data[20], data[21],
          /* Need Function that will take any additional data and insert it as comments */
        ],
      });
    });
    await this.setState({ arraySize: contactsArray.length });
    for (let i = 0; i < contactsArray.length; i++) {
      this.setState({ progress: i });
      let sendContact = await axios.post('/account/import', { ...contactsArray[i] });
      if (!sendContact || !this.state.arraySize) { break; }
    }
    // console.log("contactsArray", contactsArray);
    return this.setState({ arraySize: false });
  }

  render() {
    const progressWidth = (this.state.progress / this.state.arraySize) * 100;
    const decimalProgressWidth = this.state.arraySize ? (
      0.40 + (0.60 * (this.state.progress / this.state.arraySize).toFixed(2))
    ) : 0.20;
    return (
      <div
        className="card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 mb-3 text-center"
      >
        <div className="form-group row mb-0 pb-0">
          <div className="col-12">
            <h4 className="text-success text-center">Import Contacts</h4>
          </div>
        </div>
        <Dropzone
          accept="text/csv"
          onDrop={this.onDrop}
          multiple={false}
          className={`dropzone-style mb-4 ${this.state.dragEnter ? ' bg-success text-white' : ''}`}
          onDragEnter={() => this.setState({ dragEnter: true })}
          onDragLeave={() => this.setState({ dragEnter: false })}
        >
          <div style={{ position: 'relative', backgroundColor: `rgba(40, 167, 69, ${decimalProgressWidth} )` }}>
            {!this.state.arraySize ?
              <div className={`p-5 ${this.state.dragEnter ? ' text-white' : ' text-success'}`}>
                Drop your <strong>.CSV</strong> files here to upload.
              </div>
              :
              <div className="p-5 text-center">
                <div
                  className="bg-success"
                  style={{
                    position: 'absolute', margin: 0, padding: 0, left: 0, top: 0, height: '100%', width: `${progressWidth}%`,
                  }}
                >
                  &nbsp;
                </div>
                <div style={{ position: 'relative', zIndex: 99999 }}>
                  <span
                    className=" text-white p-2 rounded"
                    style={{ position: 'relative', zIndex: 9999999 }}
                  >
                    {progressWidth && progressWidth.toFixed(1)} %
                  </span>
                </div>
              </div>
            }
          </div>
        </Dropzone>
        { this.state.arraySize &&
          <button
            className="btn-sm btn-outline-danger w-50  m-auto "
            onClick={
              () => this.setState({ arraySize: false })
            }
          >
            Cancel
          </button>
        }
      </div>
    );
  }
}

function mapStateToProps({ account }) {
  const { changePass } = account;
  return { changePass };
}
export default connect(mapStateToProps, null)(ImportContacts);

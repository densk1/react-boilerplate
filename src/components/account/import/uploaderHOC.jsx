import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import csv from 'csv';
import axios from 'axios';

export const uploadHOC = Cmpnt => class Uploader extends Component {
  constructor() {
    super();
    this.state = {
      dragEnter: false,
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
    try {
      const reader = new FileReader();
      reader.onload = () => {
        csv.parse(reader.result, (err, data) => {
          if (err) throw err;
          this.processData(data);
        });
      };
      reader.readAsBinaryString(e[0]);
    } catch (err) {
      return false;
    }
    return true;
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
      const sendContact = await axios.post('/account/import', { ...contactsArray[i] });
      if (!sendContact || !this.state.arraySize) { break; }
    }
    // console.log("contactsArray", contactsArray);
    return this.setState({ arraySize: false });
  }
  render() {
    const {
      arraySize,
      dragEnter,
    } = this.state;
    const progressWidth = (this.state.progress / this.state.arraySize) * 100;
    const decimalProgressWidth = this.state.arraySize ? (
      0.40 + (0.60 * (this.state.progress / this.state.arraySize).toFixed(2))
    ) : 0.20;
    return (
      <div>
        <Dropzone
          accept="text/csv"
          onDrop={this.onDrop}
          multiple={false}
          className={`dropzone-style mb-4 ${this.state.dragEnter ? ' bg-success text-warning' : ''}`}
          onDragEnter={() => this.setState({ dragEnter: true })}
          onDragLeave={() => this.setState({ dragEnter: false })}
        >
          <Cmpnt
            dragEnter={dragEnter}
            arraySize={arraySize}
            progressWidth={progressWidth}
            decimalProgressWidth={decimalProgressWidth}
          />
        </Dropzone>
        { this.state.arraySize &&
          <button
            className="btn-sm btn-outline-danger w-50 m-auto "
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
};

export default uploadHOC;

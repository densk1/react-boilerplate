# react-boilerplate
### Description
An agency CRM agency built on Reactjs, Bootstrap 4, Mongo and Node. Created to circumvent the need for GDPR related data protection contracts between agencies and saas CRM companies. Installed in-house with access limited to in office LAN only.

### Features

- Contact Management and Contact Comments (Add, Edit)
- Contact Search (Partial String Database Search)
- Standard and administrative accounts for users.
- Can upload a formatted .CSV file of contacts.
- The .CSV file should have the following headings in row.
	```
	(
	firstName	
	secondName	
	email	
	organisation	
	role	
	status	
	office	
	extension	
	direct	
	mobile	
	address1	
	address2	
	city	
	postcode	
	country	
	Background
	)
	```

### Start up 
1. In a new console tab/window git clone repo, install and start the [corresponding node server](https://github.com/densk1/react-bootstrap-crm) Collecion setup on Mlab or other Mongo DB required.
2. `Git Clone repository && npm install && npm start`
3. Return to react server and `npm start`
4. Login using the default account
- **U:** info@example.com
- **P:** password


### Dependencies

#### > React
```
    "axios": "^0.17.1",
    "csv": "^2.0.0",
    "html-entities": "^1.2.1",
    "moment": "^2.20.1",
    "node-sass-chokidar": "0.0.3",
    "react": "^16.2.0",
    "react-bootstrap-modal": "^4.0.0",
    "react-dom": "^16.2.0",
    "react-dropzone": "^4.2.8",
    "react-moment": "^0.7.0",
    "react-redux": "^5.0.6",
    "react-router": "^4.2.0",
    "react-router-dom": "^4.2.2",
    "react-router-protected-route": "^1.0.0",
    "react-scripts": "1.0.17",
    "redux": "^3.7.2",
    "redux-form": "^7.2.3",
    "redux-thunk": "^2.2.0"
```

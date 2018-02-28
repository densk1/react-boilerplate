# react-boilerplate
### Description
An agency CRM agency built on Reactjs, Bootstrap 4, Mongo and Node. Created to circumvent the need for GDPR related data protection contracts between agencies and saas CRM companies. Installed in-house with access limited to in office LAN only.


### Features

- Contact Management ( CRUD )
- Contact Search
- Comments for Contacts
- Two types of user: standard / admin
- Upload CSV
- Should have the following heading in row 1 of the uploaded CSV
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

### Dependencies

## > React
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

## > Node
```
    "body-parser": "^1.18.2",
    "cookie-parser": "^1.4.3",
    "express": "^4.16.2",
    "express-sanitize-escape": "^1.1.0",
    "jwt-simple": "^0.5.1",
    "mongo": "^0.1.0",
    "mongoose": "^5.0.3",
    "mysql": "^2.15.0",
    "passport": "^0.4.0",
    "passport-google-oauth20": "^1.0.0",
    "passport-jwt": "^3.0.1",
    "sha256": "^0.2.0"
	
```

### Version 2
- Email password reset link
- Date based auto alert emails
- Editable comments

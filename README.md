# react-boilerplate
### Description
A boilerplate for react projects, including redux store setup and using bootstrap for HTML styling.

### Objective
- [] Create a boilerplate react project with node server for an application with **authentication**, **persistent login** and route serving.

## 0. Table of Contents
1. Project Objective
2. TODO: Major
3. TODO: Minor
4. Task List
5. Project Requirements
6. Route Planning
7. Add SCSS or less
8. Current WIP plan

### TODO: Major
- [x] Mysql implementation
- [x] NoSQL implementation (MongoDB & Mongoose)
  - [x] Create store on Mlab
  - [x] Connect to store on Mlab
  - [x] Create Schema
- [x] Create form 
  - [x] Build form autocreator component
  - [x] Validate form data
  - [ ] 
  - [ ] Add form data to MongoDB
  - [ ] Check if formdata already exists using a key. `{upsert: true}`
 - [ ] Build form for data collection and editing.

### TODO: Minor
- [ ] Fix Passport `.serializeUser` & `.deserializeUser()` (& `findOne()`) 
- [ ] Google Passport Auth Flow
- [ ] Hide menu on link click
- [ ] Teams page, select Team and potentially season.
- [ ] Right align the logout button

## 6. Route Planning

## 7. Current WIP plan
> Editable entry
- [ ] Create Card that flips to be editable as a form.
- [ ] So data is 'live' updated.
- [ ] Amend 'contact' Schema to include all new data types.
- [ ] 

> Form for editing of CRM database
- [x] Name
- [x] Email Address
- [x] Company | Job Title
- [x] Office
- [x] Extension
- [x] Desk
- [x] Mobile
- [x] Street Number and Name
- [x] Address Line 1
- [x] City
- [x] Postcode
- [x] Country
- [x] Comments Box

### > Need to haves
- [ ] Contact Edit
  	- [ ] Static form data VS Flip to Editable on a Card
- [ ] Contact Delete
- [ ] Contact Search
- [ ] Account Management form > how to add 2x forms


### > Nice to haves
- [ ] Editable Notes
- [ ] Actions and Dates for notes
- [ ] Email Alerts
- [ ] Dashboard

## 8. Sitemap
```
/-Marketing
 |-/Signup
 |-/Login
 |-/Dashboard (Get some Data)
 |-/Manage Account
 |-/Logout
```
 

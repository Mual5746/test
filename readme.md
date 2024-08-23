# Code test
This document contains all the information you need to get started with the code test. You will receive a simple application that is missing some crucial code. We want you to add this code in a way that you deem appropriate.
## Getting started
### Prerequisites
- To begin with the test you will need:
	- Git
	-  Visual Studio 2022
- Start by cloning this repository and then open the solution in Visual Studio

### Code structure
The code in this repository is a simple .NET Web API project. You will find the following parts within:

- wwwroot
	- Contains the frontend code.
-  Controllers
	- Contains the API endpoints for the application.
- Domain
	- Contains the domain logic of the app.
- Models
	- Contains the models for the application
- appsettings.json
	- Contains the application configuration.
- Program.cs
	- The main entry point of the .NET Application
### Your task
Your task is to implement the missing parts of the application. You will need to:

- Implement the IItemsService interface to fetch "Items"-data from the external API: `GET /api/fetch` 
	- Read the Base URL and access key from appsettings.json
> Note that the external API requires an access-key, the access-key needs to be passed to the external API as a header called "**X-Functions-Key**"
- Implement the controller actions for "GET" and "POST"
	- GET should return all the items fetched from the external API
	- POST should return the items selected (ids of the selected items are passed from the frontend)
### Turning in the task
When you are happy that you have solved the task, we ask you to create a public repository and push your code there, then share a link to that repository with us.

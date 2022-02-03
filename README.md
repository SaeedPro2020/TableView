## Context
You are a city manager and you want to see all the appointments of the runner.  
In order to do do that you should be able to select a runner and then see all her/his appointments.  

## Task
- Create a select component from where manager can select a runner.
- Create a table component able to show an Appointment object. The table should have a column for each field present in Appointment.  
- Once the manager selects a runner the table should be filled with the data. 

In services folder there are two services 
- runner
  - `get(): Runner[]` return all the available runners
- assignments
  - `get(runner_id: string): Appointment[]` return all the appointment of a runner


## Commands
- `yarn` to install all the dependencies
- `yarn format`  if you have problem with lint, run this command
- `yarn generate`  component generator
- `yarn start` to start the project

## Rules
Once you completed the excercise send us only the components folder

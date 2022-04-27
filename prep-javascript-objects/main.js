var person = {
  firstName: 'Sharon',
  lastName: 'Tieu',
  hobby: 'gaming',
  job: 'Respiratory Therapist',
  previousJob: 'Student'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is: " + fullName + '.');

const occupation = person.job;
console.log("The person's current job is: " + occupation + '.');

const prevOccupation = person.previousJob;
console.log("The person's previous job is: " + prevOccupation + '.');

export const peopleAction = (people) => {
  console.log("you clicked people");
  console.log(people);
  return {
    type: 'PEOPLE_ACTION',
    payload: people
  }
}

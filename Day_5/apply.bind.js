// Apply method
function executeTask(taskDescription, resList) {
    console.log(`Task: ${taskDescription}`);
    console.log(`Resources: ${resList.join(', ')}`);
}
const teamMember = {
    name: 'Rishab'
};
executeTask.apply(teamMember, ['Design', ['Sketches', 'Graphics']]);


//Bind Method
const guest = {
    name: 'Prasann',
    greet: function () {
        console.log(`Hello, I'm ${this.name}`);
    }
};
const boundGreet = guest.greet.bind({ name: 'Rishu' });
boundGreet(); // Output: Hello, I'm Rishu

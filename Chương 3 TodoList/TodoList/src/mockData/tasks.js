
const { v4: uuidv4 } = require('uuid');
console.log('test uuid = ', uuidv4());// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
export default [
    {
        id: uuidv4(),
        taskName: " A dsdDdDsd Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        level: 0,//small
    },
    {
        id: uuidv4(),
        taskName: " B  JLorem dsdDdDsd Ipsum is simply dummy text of the printing and typesetting industry.",
        level: 1,//small
    },
    {
        id: uuidv4(),
        taskName: " j C Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        level: 2,//small
    },

] 
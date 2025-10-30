const fruitList = ['apple', 'banana', 'cherry'];
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];
 function List () {
    return (
<ul>
      {fruitList.map(fruit => 
        <li key={fruit}>{fruit}</li>
      )}
      {
        users.map(ele =>
            <li key={ele.id}>{ele.name} is {ele.age} year old.</li>
        )}
    </ul>
    )
}
export default List
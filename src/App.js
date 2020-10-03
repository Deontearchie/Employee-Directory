import React from 'react';
import './App.css';
import employee from "./employee.json"
import Heading from "./components/heading"
class App extends React.Component {
  state = {
    employeelist: employee,
    order:""
  }
  handlesearch = word => {
    console.log(word)
    const newList = employee.filter(item=>{
      return item.Name.toLowerCase().includes(word.toLowerCase())
    })
   this.setState({employeelist:newList}) 
  }
  handleSort=sortOn=> {
  
    const newList = employee.sort((a, b)=> {
      var nameA = a[sortOn].toUpperCase(); // ignore upper and lowercase
      var nameB = b[sortOn].toUpperCase(); // ignore upper and lowercase
      if(this.state.order === "des"){
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }else{
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }

    })
    const newOrder = this.state.order === "des" ? "asc": "des" 
    this.setState({
      employeelist:newList,
      order: newOrder
    })
  }
  render() {

    return (
      <>
      <Heading/>
      <input type="text" onChange={e=>this.handlesearch(e.target.value)}/> Name Search
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th onClick={()=>this.handleSort("Name")} scope="col">Name</th>
              <th  onClick={()=>this.handleSort("Phone")} scope="col">phone</th>
              <th onClick={()=>this.handleSort("Email")}  scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employeelist.map(employee => (

              <tr>
                <th scope="row">{employee.id}</th>
                <td>{employee.Name}</td>
                <td>{employee.Phone}</td>
                <td>{employee.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </>

    );
  }
}




export default App;

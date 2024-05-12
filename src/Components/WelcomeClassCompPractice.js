import React from 'react';
class WelcomeStudents extends React.Component
{
render()
{
    return <div>
      <h1> Welcome Students to the react class component </h1>
       <h1>Welcome {this.props.name} to the class component practice,i am playing {this.props.userName}</h1>
    </div>
    
    
}
}
export default WelcomeStudents;
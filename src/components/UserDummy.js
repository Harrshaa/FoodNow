import React from "react";


class UserDummy extends React.Component{

    constructor(props){
        super(props);
        console.log("Child 2 Constructor");

    }

    componentDidMount(){
        console.log("Child 2 Did Mount")

    }

    render(){
        console.log("Child 2 Render");

    }

}

export default UserDummy;
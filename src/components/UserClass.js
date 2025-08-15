import React from "react"

class UserClass extends React.Component {
    constructor(props){
        console.log("child constructor");
        super(props);
        this.state ={
            count :0,
        }

    }

    componentDidMount(){
        console.log("child did mount")
    }


    render(){
        console.log("child render")
        const {count} = this.state;
        return(
            <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count +1
                })
            }  }>Count Increase</button>

            <button onClick={()=>{
                this.setState({
                    count: this.state.count -1
                })
            }}>Decrease the count </button>



            <h2>Name : {this.props.name}</h2>
            <h3>Location : {this.props.location}</h3>
            <h4>Contact : @harrshaa</h4>

        </div>
        )
    }


}

export default UserClass
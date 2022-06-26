import React, { Component } from 'react'
import './fab/fab.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faXmark } from '@fortawesome/free-solid-svg-icons'

class Maybe extends Component {
  

    constructor(props) {
        super(props)

        // Set initial state
        this.state = { status: true}
        

        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }
   

    renderContent() {
        return (
            <ul className="fabMenu">
                <li className='adadmin'>
                    <a href="#/">Add Staff</a>
                </li>
                <li className='noticeu'>
                    <a href="#/">Add Staff</a>
                </li>
                <li className='notice'>
                    <a href="#/">Add Staff</a>
                </li>
                <li className='adminl'>
                    <a href="#/">Add Inventory</a>
                </li>
            </ul>
        )
    }

    handleClick() {
        this.setState({ clicked: true });

        // Changing state
        this.setState({
            msg: 'Course Content',
            content: this.renderContent()
        })
        this.setState({ title: "New title" });
      
            this.setState({popstate: !this.state.popstate, status: !this.state.status})
         
    }

    render() {
        let mystate = this.state.popstate ? "fabopen" : "fabclose";
        return (



            <div className="fab">
                <div className="FabInner">
                    <a href="#/" className="FabButton open" onClick={this.handleClick}>
                        {this.state.status ? <FontAwesomeIcon icon={faPlus} className="icon " /> 
                        : <FontAwesomeIcon icon={faXmark} className="icon " />}

                    </a>
                    <div className={mystate}>
                    {this.state.content}
                    </div>

                </div>


            </div>
        )
    }
}

export default Maybe
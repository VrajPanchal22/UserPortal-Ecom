import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class FilterDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      value:"Filter Orders"
    };
  }
  handleClick(e,value){
    e.target.value = value;
    this.setState({value:value});
    this.props.changeFilter(value);
  
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret   id="dropdownMenuButton">
              {this.state.value}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={(e)=>{this.handleClick(e,'Filter Orders')}} >Filter Orders</DropdownItem>
          <DropdownItem className='dropdown-item' onClick={(e)=>{this.handleClick(e,'Last 30 Days')}}>Last 30 Days </DropdownItem>
          <DropdownItem onClick={(e)=>{this.handleClick(e,'2023')}} >2023</DropdownItem>
          <DropdownItem  onClick={(e)=>{this.handleClick(e,'2022')}}>2022</DropdownItem>
          <DropdownItem  onClick={(e)=>{this.handleClick(e,'2021')}}>2021</DropdownItem>
          <DropdownItem  onClick={(e)=>{this.handleClick(e,'2020')}}>2020</DropdownItem>
          <DropdownItem  onClick={(e)=>{this.handleClick(e,'Older')}}>Older</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      
    );
  }
}

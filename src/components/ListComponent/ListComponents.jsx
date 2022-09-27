import { Avatar, List } from 'antd';
import React from 'react';
import "./listComponents.scss";


const ListComponents = ({name,location}) => {
  return (
      <div className="listContainer">
        <div className="list">
          <div className="name">{name}</div>
          <div className="location">{location}</div>
        </div>
      </div>
        
  );
};


export default ListComponents;
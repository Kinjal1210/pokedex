import { useEffect, useState } from "react";

export function Filters({ pokeArr, filterName, filterType, filterWeak, setFilterName, setFilterType, setFilterWeak }) {
  

  const typeArr = [];

  function getTypes() {
    pokeArr.map((ele) => {
      ele.type.map((e) => {
        if (!typeArr.includes(e)) {
          typeArr.push(e);
        }
      });
    });
  }
  getTypes();
 
  function filterSubmit(event) {
    event.preventDefault();
    setFilterName(() => {
        return document.getElementById("nameSelect").value;
        
    })
    setFilterType(() => {
        return document.getElementById("typeSelect").value;
    })
    setFilterWeak(() => {
       return document.getElementById("weaknessSelect").value;
    })
    console.log(filterName);
    console.log(filterType);
    console.log(filterWeak);
  }

  return (
    <form onSubmit={filterSubmit}>
    <div className="filters-container">
      <div>
        <label htmlFor="nameSelect">Choose by Name</label>
        <select id="nameSelect">
          <option value="">--Choose an Option--</option>
          {pokeArr.map((ele) => {
            return <option key={ele.id + ele.name} value={ele.name}>{ele.name}</option>
          })}
        </select>
      </div>
      <div>
        <label htmlFor="typeSelect">Choose by Type</label>
        <select id="typeSelect">
          <option value="">--Choose an Option--</option>
          {typeArr.map((ele) => {
            return <option key={ele} value={ele}>{ele}</option>
          })}
        </select>
      </div>
      <div>
        <label htmlFor="weaknessSelect">Choose by Weakness</label>
        <select id="weaknessSelect">
          <option value="">--Choose an Option--</option>
          {typeArr.map((ele, index) => {
            return <option key={ele + index} value={ele}>{ele}</option>
          })}
        </select>
      </div>
    </div>
    <button type="submit">Filter</button>
    </form>
  );
}

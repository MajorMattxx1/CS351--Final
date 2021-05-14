import React from "react";

//NOTE: the browser is rendering everything in a column, I do not know why,
// and I believe it's due to the CSS

function StateViewer(prop) {
    
    let stuff = [ ];
    
    if (prop.filter == true){
        prop.states.forEach(detailsy1);
    
    
        function detailsy1(item, index) {
            if (item.population > 20000000){
              return stuff.push(<details>
                         <summary>{item.state}</summary>
                         <p><label>Population: </label>{item.population}</p> 
                         <p><label>Capital City: </label>{item.capital_city}</p>
                         </details>);  
                    }
            
        }
    } else {
         prop.states.forEach(detailsy2);
    
    
        function detailsy2(item, index) {
            return stuff.push(<details>
                         <summary>{item.state}</summary>
                         <p><label>Population: </label>{item.population}</p> 
                         <p><label>Capital City: </label>{item.capital_city}</p>
                         </details>);
        }                 
    }
    
    
    
    return(<section>{stuff}</section>)
}

export default StateViewer;
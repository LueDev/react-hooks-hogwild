import React, {useState, useEffect} from "react"
import Piglist from "./Piglist";
import Filter from "./Filter";

function Content({pigs}){

    const [allPiggies, setAllPiggies] = useState(pigs)
    const [piggyFilter, setPiggyFilter] = useState({
        name: "",
        weight: "",
        weightDropdown: "less than",
        greased: ""
    });
    const [filteredPiggies, setFilteredPiggies] = useState([])

    useEffect(() => {
        centralFilter();
        console.log("FILTERED PIGGIES: ", filteredPiggies)
      }, [piggyFilter, allPiggies]);
    

    function handleClick(e) {
        e.stopPropagation();
    
        // Start from the clicked element
        let currentNode = e.target;
    
        // Continue going up through the parent nodes until an LI is found
        while (currentNode.nodeName !== "LI") {
            currentNode = currentNode.parentNode;
    
            // If there's no more parent node (reached the top of the document), break the loop
            if (!currentNode) {
                break;
            }
        }
    
        // Check if an LI element was found
        if (currentNode && currentNode.nodeName === "LI") {
            console.log(currentNode);
            currentNode.children[1].classList.toggle('hidden')
            // currentNode.classList.toggle('selected')
        }
    }

    function handleAddPiggy(piggy){
        setAllPiggies([...allPiggies, piggy])
        console.log("handleAddPiggy Called")
    }

    function centralFilter(){
        const filteredByAll = allPiggies.filter((piggy) => {
            const filterName = piggyFilter.name.toLowerCase();
            const piggyName = piggy.name.toLowerCase();
      
            // Check if the piggy name contains the filter name
            const nameCondition = piggyName.includes(filterName) || filterName === '';
      
            // Check weight based on the selected dropdown option
            const weightCondition =
              piggyFilter.weight === '' ||
              (piggyFilter.weightDropdown === 'less than' && piggy.weight < parseFloat(piggyFilter.weight)) ||
              (piggyFilter.weightDropdown === 'greater than' && piggy.weight > parseFloat(piggyFilter.weight))||
              (piggyFilter.weightDropdown === 'equal to' && piggy.weight === parseFloat(piggyFilter.weight));
      
            // Check greased status
            const greasedCondition =
              piggyFilter.greased === '' || (piggyFilter.greased === 'true' && piggy.greased) || (piggyFilter.greased === 'false' && !piggy.greased);
      
            // Combine all conditions
            return nameCondition && weightCondition && greasedCondition;
          });
      
          setFilteredPiggies(filteredByAll);
    }

    function handlePiggyNameFilterChange(e){
        setPiggyFilter({...piggyFilter, name:e.target.value})
        console.log("PIGGY FILTER, NAME: ", piggyFilter.name)
    }

    function handlePiggyWeightFilterChange(e){
        setPiggyFilter({...piggyFilter, weight:e.target.value})
        console.log("PIGGY FILTER, WEIGHT: ",piggyFilter.weight)
    }

    function handlePiggyWeightDropdownFilterChange(e){
        setPiggyFilter({...piggyFilter, weightDropdown:e.target.value})
        console.log("PIGGY FILTER, WEIGHT DROPDOWN: ",piggyFilter.weightDropdown)
    }

    function handlePiggyGreasedFilterChange(e){
        setPiggyFilter({...piggyFilter, greased:e.target.value})
        console.log("PIGGY FILTER, GREASED: ",piggyFilter.greased)
    }

    return(
       <div className="content">
       
            <Filter 
                onAddPiggy={handleAddPiggy} 
                piggyFilter={piggyFilter}
                nameFilter={handlePiggyNameFilterChange} 
                weightFilter={handlePiggyWeightFilterChange}
                weightDropdownFilter={handlePiggyWeightDropdownFilterChange}
                greasedFilter={handlePiggyGreasedFilterChange}
            />
            <Piglist pigs={filteredPiggies} onPigTileClick={handleClick}/>
       </div>
    )

}

export default Content
import React from "react"

function Piglist({pigs, onPigTileClick}){
    return(
        <div className="pigList">
            <ul>
                <div className="ui column grid">
                    {pigs.map((pig) => {
                        return(
                            <li key={pig['name']} onClick={onPigTileClick}>
                                <div className="column">
                                    <div className="ui fluid card ">
                                        <div className="image">
                                            <img src={pig.image}/>
                                        </div>
                                        <div className="content">
                                            <a className="header">{pig.name}</a>
                                        </div>
                                    </div>
                                </div>
                                <table className="ui definition table hidden">
                                    <thead>
                                        <tr>
                                        <th>{pig.name}'s Card</th>
                                        <th>Description</th>
                                    </tr></thead>
                                    <tbody>
                                        <tr>
                                        <td>Specialty</td>
                                        <td>{pig.specialty}</td>                              
                                        </tr>
                                        <tr>
                                        <td>Greased</td>
                                        <td>{pig.greased? "true": "false"}</td>
                                        </tr>
                                        <tr>
                                        <td>Weight</td>
                                        <td>{pig.weight}</td>
                                        </tr>
                                        <tr>
                                        <td>Highest Medal Achieved</td>
                                        <td>{pig['highest medal achieved']}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>)
                    })}
                </div>
            </ul>
        </div>
    )

}

export default Piglist;
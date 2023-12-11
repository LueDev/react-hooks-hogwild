import React, {useState, useEffect} from "react"
import { useForm, SubmitHandler } from "react-hook-form"

export default function Filter({onAddPiggy, piggyFilter, nameFilter, weightFilter, weightDropdownFilter, greasedFilter}){
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");


    useEffect(() => {
        // Check if data is not empty before calling onAddPiggy
        if (data.length > 0) {

            const newPiggy = JSON.parse(data)
          onAddPiggy(newPiggy);
        }
      }, [data]); // Include formData in the dependency array
    

    return (
    <div>
        <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
            <div className="column">
            <div className="ui form">
                <h3>Filter by</h3>
                <div className="field">
                <label>Piggy Name</label>
                <div className="ui left icon input">
                    <input type="text" placeholder="Piggy Name" value={piggyFilter.name} onChange={nameFilter}/>
                    <i className="address card icon"></i>
                </div>
                </div>

                <div className="field">
                <label>Piggy Weight</label>
                <div className="ui left icon input">
                    <input type="number" placeholder="Select comparison ->" value={piggyFilter.weight} onChange={weightFilter}/>
                    <i className="weight icon"></i>

                    {/*Todo: needs onChange*/}
                    <select value={piggyFilter.weightDropdown} onChange={weightDropdownFilter}>
                    <option value="greater than">Greater Than </option>
                    <option value="less than">Less Than</option>
                    <option value="equal to">Equal to</option>
                </select>
                </div>
                </div>

                <div className="field">
                <label>Greased Piggy?</label>
                <select value={piggyFilter.greased} onChange={greasedFilter}>
                    <option value="">Select...</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                </div>
            </div>
            </div>
            <div className="middle aligned column">

            <h3>Add A Piggy</h3>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <input {...register("name", {required: true})} placeholder="Piggy name" /> <br/>
                <input {...register("specialty", {required: true })} placeholder="Piggy Specialty" /> <br/>
                <select {...register("greased", { required: true })}>
                    <option value="">Greased..</option>
                    <option value="true">True</option> 
                    <option value="false">False</option> 
                </select><br/>
                <input {...register("weight", {required: true})} placeholder="Weight" /><br/>
                <input {...register("highest medal achieved", {required: true})} placeholder="Highest Medal Achieved" /><br/>
                <input {...register("image", {required: true})} placeholder="URL for Image" /><br/>
                <input type="submit" />
            </form>
            </div>
        </div>
        <div class="ui vertical divider">
            Or
        </div>
        </div>
    </div>
    );
  }
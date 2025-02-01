import { useState } from "react";


function AddSkills({skills, changeSkills, deleteSkill, addSkills}){

    return <>
    <h2 className="titleSection">Skills</h2>
    <button className="addMore skills" onClick={addSkills}>Add Skills</button>
    
    
        {skills.map(skill => (
                <div className="userInfo">
            <div key={skill.id}>

            <div className="skillContainer">
                <input value={skill.description} className="skillInput" id={skill.id} name="description" onChange={changeSkills}/>
                <button className="deleteButton skill" id={skill.id}  onClick={deleteSkill}>Delete</button>
            </div>

            </div>
            </div>

        ))}

    </>
}

export default AddSkills;
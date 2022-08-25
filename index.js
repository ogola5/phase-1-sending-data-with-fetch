// Add your code here
async function submitData(name,email){
    const formData = {
        name:"Evance",
        email:"ogolaevans@gmail.com",
    }

    const configurationObject = {
        method:"POST",
        headers:{
            "Content_Type":"application/json",
            Accept:"application/json",
        },
        body:JSON.stringify(formData),
    };
    try {
        const response = await fetch("http://localhost:3000/users", configurationObject);
        const object = await response.json();
        const p = document.createElement('p');
        return document.querySelector('body').appendChild(p).textContent = object.id;
        
        
    } catch (error) {
        const p_1 = document.createElement('p');
        return document.querySelector('body').appendChild(p_1).textContent = error;
    
    }
}

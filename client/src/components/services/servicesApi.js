export async function getProfesiones(){
    try{
        const response = await fetch('http://localhost:3000/api/profesiones');
        const data = await response.json();

        if (response.status !== 200) {
            response.status(400).send("No encontrados");
        }
        return data;
    } catch (error) {
        response.status(500).send(error);
    }
}
export async function getAspirantes(){
    try {
        const response = await fetch('http://localhost:3000/api/profesiones')
        const data = await response.json();
        if (response.status !== 200) {
            response.status(400).send("No encontrados");
        }
        return data;
    } catch (error) {
        response.status(500).send(error);
    }  
}
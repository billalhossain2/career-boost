import getStorage from "./getStorage"
const addStorage = (job) => {
  if(!getStorage()){
    console.log('Job Nei!')
    localStorage.setItem('appliedJobs', JSON.stringify([job]))
  }else{
    const storedJobs = getStorage();
    console.log("TEst", storedJobs)
    const isFound = storedJobs.find(storedJob => storedJob.id === job.id);
    if(!isFound){
        storedJobs.push(job);
        localStorage.setItem('appliedJobs', JSON.stringify(storedJobs))
    }else{
        alert('Already applied!')
    }
  }
}
export default addStorage
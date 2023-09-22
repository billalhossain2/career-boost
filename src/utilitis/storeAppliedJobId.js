import getAppliedJobsIds from "./getAppliedJobsIds"

const storeAppliedJobId = (appliedJobId) => {
 const storedJobsIds =  getAppliedJobsIds()
 const isExist = storedJobsIds.find(storedJobId =>parseInt(storedJobId) === appliedJobId)

 if(!isExist){
    storedJobsIds.push(appliedJobId)
    localStorage.setItem("storedAppliedJobsIds", JSON.stringify(storedJobsIds));
 }
}

export default storeAppliedJobId
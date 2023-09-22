const getAppliedJobsIds = () => {
  const storedAppliedJobsIds = localStorage.getItem('storedAppliedJobsIds');
  if(storedAppliedJobsIds){
    const storedJobsIds = JSON.parse(storedAppliedJobsIds)
    return storedJobsIds;
  }
  return [];
}

export default getAppliedJobsIds
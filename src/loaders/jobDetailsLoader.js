const jobDetailsLoader = async({params}) => await fetch(`http://localhost:3000/features/${params.detailId}`)

export default jobDetailsLoader
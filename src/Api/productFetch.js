
const productFetch=()=>{
    const [data,setData]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);

    useEffect(()=>{
        fetch("http://localhost:8080/admin/json-data")
        .then(res=>res.json())
        .then(
            (result)=>{
            setIsLoaded(true);
            setData(result);
            },
        
        )
    },[]);
}
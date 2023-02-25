









import React, { useEffect ,useContext, useState  }  from "react";


const api_url =` http://localhost:3001/apidata`;

const AppContext = React.createContext();

const AppProvider = (({ children }) => {

    const [game , setGame]=useState([]);
    const [iserror , setIsError]=useState({
        show:false ,
        msg:""
    });

    const getGame = async (url)=>{

        try{
            const res =await fetch(url);
            const data = await res.json()
            console.log(data)

            if(data.Response==="True")
            {
                setGame(data.Search)

            }
            else
            {
               setIsError(
                {
                    show:true,
                    msg:data.error
                }
               )
            }

        }
        catch(error){
            console.log("Error")
        }

    };


    useEffect(()=>{
        getGame(api_url);
    },[])

    return <AppContext.Provider value={{game}} >
        {children}

    </AppContext.Provider>

});

const useGlobalContext=()=>{
    return useContext(AppContext);
}

export{AppContext , AppProvider , useGlobalContext};
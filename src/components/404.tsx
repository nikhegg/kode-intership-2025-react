import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    let navigate = useNavigate()
    useEffect(() => {
        document.title = "KODE | 404"
        return () => {
            document.title = "KODE | Поиск"
        }
    },[])
    return (
        <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <h1>Страница не найдена :(</h1>
            <h3 onClick={() => navigate("/")}>Перейти на главную</h3>
        </div>
    )
}

export default PageNotFound;
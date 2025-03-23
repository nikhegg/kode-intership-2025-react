import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    let [t, _] = useTranslation("locale")
    let navigate = useNavigate()
    useEffect(() => {
        document.title = "KODE | 404"
        return () => {
            document.title = t("main.system.document_title")
        }
    },[])
    return (
        <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <h1>{t("404.page_not_found")}</h1>
            <h3 onClick={() => navigate("/")}>{t("404.back_to_home")}</h3>
        </div>
    )
}

export default PageNotFound;
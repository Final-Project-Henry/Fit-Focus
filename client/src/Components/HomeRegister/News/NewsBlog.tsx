import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import news, { news as newsInterface } from "./newsData";



const NewsBlog = () => {

    const { id } = useParams()
    const [newsData, setNewsData] = useState<newsInterface | null>()

    useEffect(() => {

        let temp = news.find(e => e.id === Number(id)) as any
        temp = { ...temp, info: temp.info.split("\n") }
        temp.info.map((e: any) => console.log(e))
        setNewsData(temp)

    }, [])



    return (
        <div></div>
    );
};

export default NewsBlog;

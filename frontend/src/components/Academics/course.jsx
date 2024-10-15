

export default function Course({data}){
    return(
        <>
            <div className="course">
            <a href={data.link} target="_blank" rel="noopener noreferrer"><button className="b1">{data.code}</button></a>
                
            <h1>{data.name}</h1>
                <h2>{data.code}</h2>
                
                <p>{data.description}</p>
               
            </div>
        </>
    );
}
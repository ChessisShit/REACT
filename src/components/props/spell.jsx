const DndMapper = ({name, index, url}) => {
    return ( 
        <div>
            <h1>Name: {name}</h1>
            <h6>Index: {index}</h6>
            <h6>{url}</h6>
        </div>
     );
}

export default DndMapper;
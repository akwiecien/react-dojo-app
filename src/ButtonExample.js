


const ButtonExample = () =>{
    
    const handleClick = (e) => {
        console.log("clicked !!!", e)
    };

    const handle2Click = (e, arg) => {
        console.log("clicked with arg: "+arg)
        console.log(e);
    };

    return (
        <>
            {/* click handler simple */}
            <button className="btn btn-sm btn-secondary mx-5" onClick={handleClick}>Click me!</button>
            {/* Click Hanlder with arg */}
            <button className="btn btn-sm btn-danger mx-5" onClick={(e) => handle2Click(e, 'value1')}>Click me 2!</button>
        </>
    )
}

export default ButtonExample
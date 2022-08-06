function Card(props){
    return ( <div className="col-xl-3 col-md-6 mb-4">
    <div className={`card border-left-${props.data.colour} shadow h-100 py-2`}>
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className={`text-xs font-weight-bold text-${props.data.colour} text-uppercase mb-1`}>
                        {props.data.name}</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.AMOUNT}</div>
                </div>
                <div className="col-auto">
                    <i className={`${props.data.symbol} fa-2x text-gray-300`}></i>
                </div>
            </div>
        </div>
    </div>
</div>)
}

export default Card
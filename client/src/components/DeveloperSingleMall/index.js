function DeveloperSingleMall({ mallName, style, location }) {

    return (
        <div className="my-2">
            <h4>{mallName}</h4>
            <ul>
                <li>{location}</li>
                <li>{style}</li>
            </ul>
        </div>
    );
}

export default DeveloperSingleMall;
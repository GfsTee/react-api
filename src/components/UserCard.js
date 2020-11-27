const UserCard = (props) => {

    return (
        <div className="user">
            <h3>{props.userData.name}</h3>
            <div>
                {props.userData.address.street} <br />
                {props.userData.address.city} <br />
                {props.userData.address.zipcode} <br />
            </div>
            <a href={props.userData.email}>Email me!</a>
        </div>
    );
}

export default UserCard;

// address: {street: "Victor Plains", suite: "Suite 879", city: "Wisokyburgh", zipcode: "90566-7771", geo: {…}}
// company: {name: "Deckow-Crist", catchPhrase: "Proactive didactic contingency", bs: "synergize scalable supply-chains"}
// email: "Shanna@melissa.tv"
// id: 2
// name: "Ervin Howell"
// phone: "010-692-6593 x09125"
// username: "Antonette"
// website: "anastasia.net"
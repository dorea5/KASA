function ApartmentCard(props) {
  return (
    <div className="apartment-card">
      <img src={props.cover} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  );
}

export default ApartmentCard;

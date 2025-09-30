const FunctiomComp = (props) => {
  return (
    <div>
      <h1>Function Component</h1>
      <p>
        Name:{props.fname}
        Last-Name:{props.lname} Contact:{props.contact} gender:{props.gender}
        address:{props.address}
      </p>
    </div>
  );
};

export default FunctiomComp;

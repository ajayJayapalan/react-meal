const TotalAmount = (props) => {
  const styles = {
    amountContainer: { display: "flex", justifyContent: "space-between" }
  };

  return (
    <>
      <div style={styles.amountContainer}>
        <h3>TotalAmount</h3>
        <h3>${props.totalPrice}</h3>
      </div>
    </>
  );
};

export default TotalAmount;

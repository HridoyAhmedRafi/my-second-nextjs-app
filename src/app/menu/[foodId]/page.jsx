const FoodDetailsPage = async ({ params }) => {
  const { foodId } = await params;
  return (
    <div>
      <h1>Food Details : {foodId}</h1>
      <div>
        {/* <p>{foo}</p> */}
      </div>
    </div>
  );
};

export default FoodDetailsPage;

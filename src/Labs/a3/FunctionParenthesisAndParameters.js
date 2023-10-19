function FunctionParenthesisAndParameters() {
  const square = (a) => a * a;
  const plusOne = (a) => a + 1;

  const twoSqaured = square(2);
  const threePlusOne = plusOne(3);

  return (
    <>
      <h3>Paranthesis and Parameters</h3>
      twoSquared = {twoSqaured}
      <br />
      sqaure(2) = {square(2)}
      <br />
      threePlusOne = {threePlusOne}
      <br />
      plusOne(3) = {plusOne(3)}
      <br />
    </>
  );
}

export default FunctionParenthesisAndParameters;

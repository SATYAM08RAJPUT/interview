// function RegularFun() {
//   return (
//     <>
//       <h3>This is Regular fucntion</h3>
//     </>
//   );
// }
// export default RegularFun;

const ArrowFun = () => {
  const handleAltert = () => {
    alert("Hello Button !!");
  };
  return (
    <>
      <h3 onClick={handleAltert}>Arrow fuction</h3>
    </>
  );
};
export default ArrowFun;

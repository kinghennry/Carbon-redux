import GridLoader from "react-spinners/GridLoader";

function Loading(props) {
  let loading = true;
  let color = "#008C36";
  return (
    <div className="h-screen grid place-items-center">
      <GridLoader color={color} loading={loading} size={30} />
    </div>
  );
}

export default Loading;

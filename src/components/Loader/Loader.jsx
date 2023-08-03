import { Triangle } from "react-loader-spinner";

export default function Loader() {
    return (
        <Triangle
            height="80"
            width="80"
            color="#fff96d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}
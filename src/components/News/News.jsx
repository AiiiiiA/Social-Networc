import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";

const News = (props) => {
    return (
        <div>
            ЛЕНТА
        </div>
    )
}

export default compose(
    withAuthRedirect
)(News);
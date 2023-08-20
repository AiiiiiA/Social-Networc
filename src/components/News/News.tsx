import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";

type News = {

}

const News = ({ }) => {
    return (
        <div>
            ЛЕНТА НОВОСТЕЙ
        </div>
    )
}

export default compose(
    withAuthRedirect
)(News);
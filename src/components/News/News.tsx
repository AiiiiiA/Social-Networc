import { compose } from "redux" 
import { withAuthRedirect } from "../../hoc/WithAuthRedirect" 
import { FC } from 'react'

type News = {

}

const News: FC<News> = ({ }) => {
    return (
        <div>НОВОСТИ</div>
    )
}

export default compose(
    withAuthRedirect
)(News) 
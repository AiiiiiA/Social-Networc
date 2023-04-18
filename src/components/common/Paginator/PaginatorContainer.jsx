import { connect } from 'react-redux';
import Paginator from './Paginator';
import { getTotalUsers, getPotionSize, getPageSize, getCurrentPage } from '../../../Redux/usersSelectors';

const PaginatorContainer = (props) => {

    return (
        <Paginator

            totalItemsCount={props.totalUsers}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            portionSize={props.portionSize}
            portionNumber={props.portionNumber}

        />
    )
}

let mapStateToProps = (state) => (
    {
        totalItemsCount: getTotalUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        portionSize: getPotionSize(state),
        portionNumber: state.user.portionNumber

    }
)

export default connect(mapStateToProps, {})(PaginatorContainer);
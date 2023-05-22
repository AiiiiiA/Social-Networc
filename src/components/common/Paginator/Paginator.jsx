import { useState } from 'react';
import s from './Paginator.module.css';
import cn from 'classnames'

const Paginator = ({ totalItemsCount, pageSize, currentPage, setSelectedPage, portionSize, currentPortion }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push({ i, id: i });
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(currentPortion);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.page}>
            {portionNumber > 1
                && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>
                    Назад
                </button>}

            {pages
                .filter(p => p.i >= leftPortionPageNumber && p.i <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <a key={p.id} className={cn({ [s.activePage]: currentPage === p.i })}
                            onClick={(e) => { setSelectedPage(p.i, portionNumber) }}>
                            {p.i}
                        </a>
                    )
                })}

            {portionCount > portionNumber
                && <button onClick={() => { setPortionNumber(portionNumber + 1) }} >
                    Вперед
                </button>}

        </div>
    )
}

export default Paginator;
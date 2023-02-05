export const SORT_DIRECTION = {
    newToOld: 'ASC',
    oldToNew: 'DESC',
    cheapToExpensive: 'ASC',
    expensiveToCheap: 'DESC'
}
export const SORT_BY = {
    newToOld: 'createdDate',
    oldToNew: 'createdDate',
    cheapToExpensive: 'cost',
    expensiveToCheap: 'cost'
}

export type SORT_OPTION_TYPES = 'newToOld' | 'oldToNew' | 'cheapToExpensive' | 'expensiveToCheap';
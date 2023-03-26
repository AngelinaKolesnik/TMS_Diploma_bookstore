const SET_BOOKS = 'SET_BOOKS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const defaultState = {
	books: [],
	isFetching: true,
	currentPage: 1,
	totalCount: 0,
}

export const bookReducer = (store = defaultState, action) => {
	switch (action.type) {
		case SET_BOOKS:
			return {
				...store,
				books: action.payload.books,
				totalCount: action.payload.total,
				// currentPage: action.payload.page
				// isFetching: false
			}
			case SET_CURRENT_PAGE:
				return {
					...store,
					currentPage: action.payload,
				}
		default:
			return store
	}
}

export const setBooks = (books) => ({type: SET_BOOKS, payload: books})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, payload: currentPage})
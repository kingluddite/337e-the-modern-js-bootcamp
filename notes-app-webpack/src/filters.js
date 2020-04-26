import { isString as _isString } from 'lodash'

const filters = {
  searchText: '',
  sortBy: 'byEdited',
}

// expose a function to get the filters
const getFilters = () => filters

const setFilters = (updates) => {
  if (_isString(updates.searchText)) {
    filters.searchText = updates.searchText
  }

  if (_isString(updates.sortBy)) {
    filters.sortBy = updates.sortBy
  }
}

export { getFilters, setFilters }

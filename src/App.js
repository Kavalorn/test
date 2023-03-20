import react, { useEffect, useState } from 'react';
import {useGetRepositoriesQuery} from './app/services/repositories-api-slice'
import { SearchInput } from './components/SearchInput/SearchInput';
import { List } from './components/List/List/List';
import styles from './App.module.css';
import Pagination from './components/List/Pagination/Pagination';

function App() {

  const [repositoriesQueryParams, setRepositoriesQueryParams] = useState({
    query: 'react',
    per_page: 3,
    page: 1
  })
  
  const { data: repositories = {}, isFetching } = useGetRepositoriesQuery(repositoriesQueryParams)

  const setQueryValue = (value) => {
    setRepositoriesQueryParams({
      ...repositoriesQueryParams,
      query: value,
      page: 1
    })
  }

  const setPage = (page) => {
    setRepositoriesQueryParams({...repositoriesQueryParams, page});
  }

  return (
    <div className={styles.wrapper}>
      <SearchInput value={repositoriesQueryParams.query} setter={setQueryValue} />
      <List items={repositories.items || []} isFetching={isFetching}/>
      <Pagination
        currentPage={repositoriesQueryParams.page}
        onPageChange={setPage}
        totalPages={Math.round(repositories.total_count / repositoriesQueryParams.per_page)}
      />
    </div>
  );
}

export default App;
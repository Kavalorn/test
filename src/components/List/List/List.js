import React from 'react'
import { ListItem } from '../ListItem/ListItem';
import { Pagination } from '../Pagination/Pagination';
import styles from './List.module.css';

export const List = ({items, isFetching}) => {
  return (
    <div className={styles.wrapper}>
        {isFetching ? <div className={styles.loading}>Завантаження...</div> : null}
        {!isFetching && items.length === 0 ? <div className={styles.noRepos}>За вашим запитом не знайдено жодного репозиторія</div> : null}
        <div>
            {items.map(item => <ListItem item={item} key={item.id} />)}
        </div>
    </div>
  )
}

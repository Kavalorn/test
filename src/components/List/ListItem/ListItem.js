import React from 'react'
import styles from './ListItem.module.css'

export const ListItem = ({item}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={item.owner.avatar_url} width="128" height="144" />
      </div>
      <div className={styles.details}>
        <div className={styles.repo}>{item.name}</div>
        <div className={styles.author}>{item.owner.login}</div>
        <div className={styles.language}>{item.language}</div>
        <div className={styles.description}>{item.description}</div>
      </div>
      <div className={styles.additional}>
        <div className={styles.stars}><span>{item.stargazers_count}</span>stars</div>
        <div className={styles.watchers}><span>{item.watchers_count}</span>watchers</div>
      </div>
    </div>
  )
}

import React from 'react'
import styles from './SearchInput.module.css'

export const SearchInput = ({value, setter}) => {
  return (
      <input value={value} onChange={(e) => setter(e.target.value)} className={styles.input} placeholder="test" />
  )
}

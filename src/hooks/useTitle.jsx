import React, { useEffect } from 'react'

export default function useTitle(title) {
  useEffect(() => {
    if (title) {
      document.title = `Shivansh Mishra - ${title}`
    }
    else document.title = "Shivansh Mishra"
  }, [title]);
}

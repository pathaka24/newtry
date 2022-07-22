import React from 'react'
import Form from '../../components/form/form'
import MapO from '../../components/map/map'
import ResultBanner from '../../components/result/resultBanner'

const Location = () => {
  return (
    <div>
        <ResultBanner  img='/service/page-title.jpg' name='Location' />
          <Form />
        <MapO />
    </div>
  )
}

export default Location
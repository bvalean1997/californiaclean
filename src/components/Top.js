import React from 'react'
import { useTranslation } from 'react-i18next'

import './Top.css';

const Top = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className="alert">
      <div>{t('Alert.1')}</div>
    </div>
  )
}

export default Top;

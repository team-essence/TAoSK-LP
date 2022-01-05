import React, { FC, useState, useLayoutEffect } from 'react'
import { GlobalStyle } from 'styles/global/globalStyle'
import { AppProvider } from 'provider/AppProvider'
import { Loading } from 'components/ui/loading/Loading'
import { View } from 'View'

const App: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useLayoutEffect(() => {
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    sleep(3000).then(() => setIsLoading(false))
  }, [])

  return (
    <AppProvider>
      <GlobalStyle />
      {isLoading ? <Loading /> : <View />}
    </AppProvider>
  )
}

export default App

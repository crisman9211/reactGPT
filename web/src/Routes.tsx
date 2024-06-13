// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DashboardLayout}>
        <Route path="/" page={ReactGptPage} name="reactGpt" />
        <Route path="/assistant" page={AssistantPage} name="assistant" />
        <Route path="/audio-to-text" page={AudioToTextPage} name="audioToText" />
        <Route path="/image-tunning" page={ImageTunningPage} name="imageTunning" />
        <Route path="/image-generation" page={ImageGenerationPage} name="imageGeneration" />
        <Route path="/text-to-audio" page={TextToAudioPage} name="textToAudio" />
        <Route path="/translate" page={TranslatePage} name="translate" />
        <Route path="/pros-cons-stream" page={ProsConsStreamPage} name="prosConsStream" />
        <Route path="/pros-cons" page={ProsConsPage} name="prosCons" />
        <Route path="/orthography" page={OrthographyPage} name="orthography" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes

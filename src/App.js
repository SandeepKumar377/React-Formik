import './App.css';
// import EnrollmentForm from './components/formikDemo2/EnrollmentForm';
// import RegistrationForm from './components/formikDemo2/RegistrationForm';
// import LoginForm from './components/formikDemo2/LoginForm';
// import FormikContainer from './components/formikDemo2/FormikContainer';
// import FormikComponentTest from './components/FormikComponentTest';
// import YoutubeFrom from './components/YoutubeFrom';
// import OldYoutubeFrom from './components/OldYoutubeForm';
import { ChakraProvider } from "@chakra-ui/react"
import ChakraLoginForm from './components/formikDemo2/ChakraLoginForm';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <ChakraLoginForm />

        {/* <EnrollmentForm /> */}
        {/* <RegistrationForm /> */}
        {/* <LoginForm /> */}
        {/* <FormikContainer /> */}
        {/* <FormikComponentTest /> */}
        {/* <YoutubeFrom /> */}
        {/* <OldYoutubeFrom/> */}
      </ChakraProvider>
    </div>
  );
}

export default App;

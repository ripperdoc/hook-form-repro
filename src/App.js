import './App.css';
import React, { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";

const TestForm = createContext();

export const CustomFormProvider = ({ children }) => {
  // A custom form provider in order to keep extra state on top of the useForm hook
  let formOut = useForm({
    disabled: false, // fixed if this line is commented out
  });

  console.log(formOut.formState.dirtyFields)  // or fixed if this is line commented out
  return <TestForm.Provider value={formOut}>{children}</TestForm.Provider>;
};

export const FormPage1 = () => {
  const form = useContext(TestForm);

  return (
    <div>
      <input {...form.register("settings.description")} />
    </div>
  );
};

export const FormPage2 = () => {
  const form = useContext(TestForm);

  return (
    <div>
      <input {...form.register("settings.displayName")} />
    </div>
  );
};

function App() {
  const [currentWizardSlideStep, setCurrentWizardSlideStep] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        Form page {currentWizardSlideStep}
        <CustomFormProvider>
          {currentWizardSlideStep === 0 && <FormPage1 />}
          {currentWizardSlideStep === 1 && <FormPage2 />}
        </CustomFormProvider>
        <button onClick={() => setCurrentWizardSlideStep((currentWizardSlideStep + 1) % 2)}>Next</button>
      </header>
    </div>
  );
}

export default App;

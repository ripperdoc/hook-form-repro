import './App.css';
import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

/**
 * @type {React.Context<ScenarioFormType>}
 */
const TestForm = createContext();
const defaultValues = {
  settings: {
    displayName: "",
    description: ""
  }
}

export const FormProvider = ({ children }) => {

  const form = useForm({
    defaultValues,
    values: {},
    disabled: false,
    // mode: "onBlur",
    resetOptions: {
      keepDirtyValues: true,
      keepErrors: false,
    },
  });

  return <TestForm.Provider value={form}>{children}</TestForm.Provider>;

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
  const slides = [
    { title: "Page 1", component: <FormPage1 /> },
    { title: "Page 2", component: <FormPage2 /> },
  ];

  return (
    <div className="App">
      <header className="App-header">
        Form page {currentWizardSlideStep}
        <FormProvider>
          {slides[currentWizardSlideStep].component}
        </FormProvider>
        <button onClick={() => setCurrentWizardSlideStep((currentWizardSlideStep + 1) % 2)}>Next</button>
      </header>
    </div>
  );
}

export default App;

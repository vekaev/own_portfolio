import React, { useState } from 'react'

const MultiStepsFlow = ({ children }) => {
  const [data, setData] = useState({})
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const onNextStep = state => {
    const nextStep = currentStepIndex + 1

    if (nextStep < children.length) {
      setCurrentStepIndex(nextStep)
    } else {
      setCurrentStepIndex(0)
    }

    setData(state)
  }

  const onPrevStep = () => {
    setCurrentStepIndex(currentStepIndex - 1)
    setData({})
  }

  const currentChildren = React.Children.toArray(children)[currentStepIndex]

  if (React.isValidElement(currentChildren)) {
    return React.cloneElement(currentChildren, {
      onNextStep,
      onPrevStep,
      ...data
    })
  }

  return currentChildren
}

export default MultiStepsFlow

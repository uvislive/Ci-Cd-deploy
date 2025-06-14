import React from 'react';

export function withFormLogic<T>(WrappedComponent: React.ComponentType<T>, useFormLogic:any) {
  return function EnhancedForm() {
    const props = useFormLogic();
    return <WrappedComponent {...props} />;
  };
}
